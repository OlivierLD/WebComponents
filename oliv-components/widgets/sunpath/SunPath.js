"use strict";

const sunPathVerbose = false;
const SUNPATH_TAG_NAME = 'sun-path';

/*
 * TODO:
 * - CSS Color schemes
 * - Pointing North...
 */
if (Math.toRadians === undefined) {
	Math.toRadians = (deg) => {
		return deg * (Math.PI / 180);
	};
}

const sunPathDefaultColorConfig = {
	bgColor: 'black', // Used if withGradient = false
	withGradient: true,
	displayBackgroundGradient: {
		from: 'LightGrey',
		to: 'black'
	},
	font: 'Arial',
	sunColor: 'yellow',
	cardPointColor: 'white',
	altitudeValueColor: 'cyan',
	gridColor: 'rgba(0, 205, 205, 0.75)',
	baseColor: 'rgba(0, 205, 205, 0.5)'
};

/* global HTMLElement */
class SunPath extends HTMLElement {

	static get observedAttributes() {
		return [
			"width",   // Integer. Canvas width, default 400 px;
			"height",  // Integer. Canvas height, default 400 px;
			"tilt",    // Float. The inclination of the base. Default 10 degrees
			"z-offset" // Float. Z offset, default 0 degrees
		];
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'}); // 'open' means it is accessible from external JavaScript.
		// create and append a <canvas>
		this.canvas = document.createElement("canvas");
		let fallbackElemt = document.createElement("h1");
		let content = document.createTextNode("This is a SunPath, on an HTML5 canvas");
		fallbackElemt.appendChild(content);
		this.canvas.appendChild(fallbackElemt);
		this.shadowRoot.appendChild(this.canvas);

		// Default values
		this._tilt = -10;
		this.rotation = 0;
		this._zOffset = 0;
		this._width = 400;
		this._height = 400;

		this._sunData = undefined;
		this._sunPath = undefined;

		this.sunHe = undefined;
		this.sunZ = undefined;

		this.side =   0; // Left and right

		// TODO Latitude lower than Sun D, south hemisphere and between tropics. Use Sun Z at local noon.

		this.addToZ = 180;  // 180 when pointing South (Sun in the South at noon). Combined with left right rotation
		this.invertX =  1;  // +1/-1 . +1 when pointing south

		this._previousClassName = "";
		this.sunPathColorConfig = sunPathDefaultColorConfig;

		if (sunPathVerbose) {
			console.log("Data in Constructor:", this._tilt);
		}
	}

	// Called whenever the custom element is inserted into the DOM.
	connectedCallback() {
		if (sunPathVerbose) {
			console.log("connectedCallback invoked, 'value' is [", this.value, "]");
		}
	}

	// Called whenever the custom element is removed from the DOM.
	disconnectedCallback() {
		if (sunPathVerbose) {
			console.log("disconnectedCallback invoked");
		}
	}

	// Called whenever an attribute is added, removed or updated.
	// Only attributes listed in the observedAttributes property are affected.
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (sunPathVerbose) {
			console.log("attributeChangedCallback invoked on " + attrName + " from " + oldVal + " to " + newVal);
		}
		// Use height, width, tilt. sunPath & sunData are provided after...
		switch (attrName) {
			case "tilt":
				this._tilt = parseFloat(newVal);
				break;
			case "z-offset":
				this._zOffset = parseFloat(newVal);
				break;
			case "width":
				this._width = parseInt(newVal);
				break;
			case "height":
				this._height = parseInt(newVal);
				break;
			default:
				break;
		}
		this.repaint();
	}

	// Called whenever the custom element has been moved into a new document.
	adoptedCallback() {
		if (sunPathVerbose) {
			console.log("adoptedCallback invoked");
		}
	}

	set tilt(val) {
		this.setAttribute("tilt", val);
		if (sunPathVerbose) {
			console.log(">> tilt option:", val);
		}
	}

	set zOffset(val) {
		this.setAttribute("z-offset", val);
		if (sunPathVerbose) {
			console.log(">> z-offset option:", val);
		}
	}

	set width(val) {
		this.setAttribute("width", val);
	}

	set height(val) {
		this.setAttribute("height", val);
	}

	set sunPath(json) {
		this._sunPath = json;
	}

	set sunData(json) {
		this._sunData = json;
		this.sunPos = { he: this._sunData.altitude, z: this._sunData.z };
	}

	set sunPos(sunPos) {
		this.sunHe = sunPos.he;
		this.sunZ = sunPos.z;
	}

	set shadowRoot(val) {
		this._shadowRoot = val;
	}

	get tilt() {
		return this._tilt;
	}

	get zOffset() {
		return this._zOffset;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get shadowRoot() {
		return this._shadowRoot;
	}

	// Component methods
	getColorConfig(classNames) { // TODO Upgrade that one
		let colorConfig = sunPathDefaultColorConfig;
		let classes = classNames.split(" ");
		for (let cls = 0; cls < classes.length; cls++) {
			let cssClassName = classes[cls];
			for (let s = 0; s < document.styleSheets.length; s++) {
				// console.log("Walking though ", document.styleSheets[s]);
				try {
					for (let r = 0; document.styleSheets[s].cssRules !== null && r < document.styleSheets[s].cssRules.length; r++) {
						let selector = document.styleSheets[s].cssRules[r].selectorText;
						//			console.log(">>> ", selector);
						if (selector !== undefined && (selector === '.' + cssClassName || (selector.indexOf('.' + cssClassName) > -1 && selector.indexOf(SUNPATH_TAG_NAME) > -1))) { // Cases like "tag-name .className"
							//				console.log("  >>> Found it! [%s]", selector);
							let cssText = document.styleSheets[s].cssRules[r].style.cssText;
							let cssTextElems = cssText.split(";");
							cssTextElems.forEach(function (elem) {
								if (elem.trim().length > 0) {
									let keyValPair = elem.split(":");
									let key = keyValPair[0].trim();
									let value = keyValPair[1].trim();
									switch (key) {
										case '--bg-color':
											colorConfig.bgColor = value;
											break;
										case '--display-background-gradient-from':
											colorConfig.displayBackgroundGradient.from = value;
											break;
										case '--display-background-gradient-to':
											colorConfig.displayBackgroundGradient.to = value;
											break;
										case '--grid-color':
											colorConfig.gridColor = value;
											break;
										case '--display-color':
											colorConfig.displayColor = value;
											break;
										case '--value-nb-decimal':
											colorConfig.valueNbDecimal = value;
											break;
										case '--label-font':
											colorConfig.labelFont = value;
											break;
										case '--value-font':
											colorConfig.valueFont = value;
											break;
										default:
											break;
									}
								}
							});
						}
					}
				} catch (err) {
					// Absorb
				}
			}
		}
		return colorConfig;
	}

	repaint() {
		this.drawSunPath();
	}

	/**
	 * Used to draw a globe
	 * alpha, then beta
	 *
	 * @param lat in degrees
	 * @param lng in degrees
	 * @return x, y, z. Cartesian coordinates.
	 */
	rotateBothWays(lat, lng, rotationAroundY, rotationAroundX, addToLng) {

		let x = Math.cos(Math.toRadians(lat)) * Math.sin(Math.toRadians(lng + addToLng));
		let y = Math.sin(Math.toRadians(lat));
		let z = Math.cos(Math.toRadians(lat)) * Math.cos(Math.toRadians(lng + addToLng));

		let alfa = Math.toRadians(rotationAroundY); // in plan (x, z), y unchanged.
		let beta = Math.toRadians(rotationAroundX); // in plan (y, z), x unchanged. Tilt.
		/*
		 * Note:
		 * x is the x of the screen
		 * y is the y of the screen
		 * z goes through the screen
		 *
		 *                      |  cos a -sin a  0 |  a > 0 : counter-clockwise
		 * Rotation plan x, y:  |  sin a  cos a  0 |
		 *                      |    0     0     1 |
		 *
		 *                      | 1    0      0    |  b > 0 : towards user
		 * Rotation plan y, z:  | 0  cos b  -sin b |
		 *                      | 0  sin b   cos b |
		 *
		 *  | x |   | cos a -sin a  0 |   | 1   0      0    |   | x |   |  cos a  (-sin a * cos b) (sin a * sin b) |
		 *  | y | * | sin a  cos a  0 | * | 0  cos b -sin b | = | y | * |  sin a  (cos a * cos b) (-cos a * sin b) |
		 *  | z |   |  0      0     1 |   | 0  sin b  cos b |   | z |   |   0          sin b           cos b       |
		 */

		// All in once
		let _x = (x * Math.cos(alfa)) - (y * Math.sin(alfa) * Math.cos(beta)) + (z * Math.sin(alfa) * Math.sin(beta));
		let _y = (x * Math.sin(alfa)) + (y * Math.cos(alfa) * Math.cos(beta)) - (z * Math.cos(alfa) * Math.sin(beta));
		let _z = (y * Math.sin(beta)) + (z * Math.cos(beta));

		return {x: _x, y: _y, z: _z};
	}


	drawSunPath() {

		let currentStyle = this.className;
		if (this._previousClassName !== currentStyle || true) {
			// Reload
			//	console.log("Reloading CSS");
			try {
				this.sunPathColorConfig = this.getColorConfig(currentStyle);
			} catch (err) {
				// Absorb?
				console.log(err);
			}

			this._previousClassName = currentStyle;
		}

		let context = this.canvas.getContext('2d');
		let scale = 1.0;

		if (this.width === 0 || this.height === 0) { // Not visible
			return;
		}
		// Set the canvas size from its container.
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		let radius = (this.canvas.width / 2) * .8;

		if (this.sunPathColorConfig.withGradient) {
			let grd = context.createLinearGradient(0, 5, 0, radius);
			grd.addColorStop(0, this.sunPathColorConfig.displayBackgroundGradient.from); // 0  Beginning
			grd.addColorStop(1, this.sunPathColorConfig.displayBackgroundGradient.to);   // 1  End
			context.fillStyle = grd;
		} else {
			context.fillStyle = this.sunPathColorConfig.bgColor;
		}

		// Background
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		let center = {
			x: this.canvas.width / 2,
			y: this.canvas.height / 2
		};

		// Base
		let minZ = this._sunData !== undefined ? 10 * Math.floor(this._sunData.riseZ / 10) : 90,
				maxZ = this._sunData !== undefined ? 10 * Math.ceil(this._sunData.setZ / 10) : 270;

		context.strokeStyle = this.sunPathColorConfig.gridColor;
		context.lineWidth = 3;
		let panelPoint = this.rotateBothWays(this.rotation, minZ, this.side, this._tilt, (this.addToZ + this._zOffset));
		// Base
		context.beginPath();
		context.moveTo(center.x, center.y); // Start from center
		context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		for (let alfa=minZ; alfa<=maxZ; alfa += 1) {
//		console.log("Base rotation", rotation);
			panelPoint = this.rotateBothWays(this.rotation, alfa, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		}
		context.closePath();
		context.stroke();
		// Fill the base
		context.fillStyle = this.sunPathColorConfig.baseColor;
		context.fill();

		// Close the base
		context.lineWidth = 1;
		panelPoint = this.rotateBothWays(this.rotation, minZ, this.side, this._tilt, (this.addToZ + this._zOffset));
		context.beginPath();
		context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		context.lineTo(center.x, center.y);
		context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		context.stroke();
		context.closePath();
		// Fill the base
		context.fillStyle = this.sunPathColorConfig.baseColor;
		context.fill();

		// Indicate S (or N: TODO)
		context.save();
		let fontSize = 20;
		context.font = "bold " + Math.round(fontSize) + "px Arial";
		context.fillStyle = this.sunPathColorConfig.cardPointColor;
		let len = 0;

		panelPoint = this.rotateBothWays(this.rotation, 180, this.side, this._tilt, (this.addToZ + this._zOffset));
		context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		let text = "S";
		let metrics = context.measureText(text);
		len = metrics.width;
		context.fillText(text, center.x + (panelPoint.x * radius * this.invertX) - (len / 2), center.y - (panelPoint.y * radius));

		panelPoint = this.rotateBothWays(this.rotation, 90, this.side, this._tilt, (this.addToZ + this._zOffset));
		context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		text = "E";
		metrics = context.measureText(text);
		len = metrics.width;
		context.fillText(text, center.x + (panelPoint.x * radius * this.invertX) - (len / 2), center.y - (panelPoint.y * radius));

		panelPoint = this.rotateBothWays(this.rotation, 270, this.side, this._tilt, (this.addToZ + this._zOffset));
		context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
		text = "W";
		metrics = context.measureText(text);
		len = metrics.width;
		context.fillText(text, center.x + (panelPoint.x * radius * this.invertX) - (len / 2), center.y - (panelPoint.y * radius));

		context.restore();

		// Meridians.
		for (let alfa = minZ; alfa <= maxZ; alfa += 10) { // Longitude
			panelPoint = this.rotateBothWays(this.rotation, alfa, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.beginPath();
			context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			for (let beta = 0; beta <= 90; beta += 1) { // Latitude
				panelPoint = this.rotateBothWays(beta + this.rotation, alfa, this.side, this._tilt, (this.addToZ + this._zOffset));
				context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			}
			context.stroke();
			context.closePath();
		}

		// Parallels
		for (let alfa = 10; alfa < 90; alfa += 10) { // Latitude
			panelPoint = this.rotateBothWays(alfa + this.rotation, minZ, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.beginPath();
			context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			for (let beta = minZ; beta <= maxZ; beta += 1) { // Longitude
				panelPoint = this.rotateBothWays(alfa + this.rotation, beta, this.side, this._tilt, (this.addToZ + this._zOffset));
				context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			}
			context.stroke();
			context.closePath();
			// Altitude Labels
			text = alfa + "°";
			context.fillStyle = this.sunPathColorConfig.altitudeValueColor;
			context.beginPath();
			panelPoint = this.rotateBothWays(alfa + this.rotation, 180, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			metrics = context.measureText(text);
			len = metrics.width;
			context.fillText(text, center.x + (panelPoint.x * radius * this.invertX) - (len / 2), center.y - (panelPoint.y * radius));
			context.closePath();
		}

		// Sun Path
		if (this._sunPath !== undefined) {
			context.lineWidth = 3;
			context.strokeStyle = this.sunPathColorConfig.sunColor;
			panelPoint = this.rotateBothWays(sunPath[0].alt + this.rotation, sunPath[0].z, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.beginPath();
			for (let i = 1; i < sunPath.length; i++) {
				panelPoint = this.rotateBothWays(sunPath[i].alt + this.rotation, sunPath[i].z, this.side, this._tilt, (this.addToZ + this._zOffset));
				context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			}
			context.stroke();
			context.closePath();
			context.lineWidth = 1;
		}
		// Current Sun Pos.
		if (this.sunHe !== undefined && this.sunZ !== undefined) {
			panelPoint = this.rotateBothWays(this.rotation, this.sunZ, this.side, this._tilt, (this.addToZ + this._zOffset)); // Horizon under the Sun
			// Center to horizon
			context.beginPath();
			context.moveTo(center.x, center.y);
			context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			context.stroke();
			context.closePath();
			// Up to the Sun
			context.beginPath();
			context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			for (let alt = 0; alt <= this.sunHe; alt++) {
				panelPoint = this.rotateBothWays(alt + this.rotation, this.sunZ, this.side, this._tilt, (this.addToZ + this._zOffset));
				context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			}
			panelPoint = this.rotateBothWays(this.sunHe + this.rotation, this.sunZ, this.side, this._tilt, (this.addToZ + this._zOffset));
			context.lineTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			context.stroke();
			context.closePath();
			// Draw the Sun
			context.fillStyle = this.sunPathColorConfig.sunColor;
			context.beginPath();
			context.arc(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius), 10, 2 * Math.PI, false);
			context.fill();
			context.closePath();
			// Dotted line to center
			context.save();
			context.setLineDash([5, 3]);
			context.beginPath();
			context.moveTo(center.x + (panelPoint.x * radius * this.invertX), center.y - (panelPoint.y * radius));
			context.lineTo(center.x, center.y);
			context.stroke();
			context.closePath();
			context.restore();
			// Display values
			context.save();
			fontSize = 14;
			context.font = "" + Math.round(fontSize) + "px Arial";
			context.fillText("Alt:" + this.sunHe.toFixed(2) + "°", 10, 20);
			context.fillText("Z  :" + this.sunZ.toFixed(2) + "°", 10, 40);
			context.restore();
		}
	}
}

// Associate the tag and the class
window.customElements.define(SUNPATH_TAG_NAME, SunPath);