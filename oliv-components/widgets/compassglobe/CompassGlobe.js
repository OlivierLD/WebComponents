/**
 * COmpass Globe Web Component (like Plastimo).
 * It has several attributes: width, height, value, and label, driving a canvas.
 * They have default values, respectively: 250, 100, 0, 'VAL'
 * Attributes are exposed and can be modified externally (from JavaScript)
 * In addition, there is a CSS colors management as well.
 */

const compassGlobeVerbose = false;
const COMPASS_GLOBE_TAG_NAME = 'compass-globe';

const compassGlobeDefaultColorConfig = {
	bgColor: 'white',
	displayBackgroundGradient: {
		from: 'black',
		to: 'gray'
	},
	gridColor: 'rgba(255, 255, 255, 0.7)',
	displayColor: 'cyan',
	valueNbDecimal: 0,
	labelFont: 'Courier New',
	valueFont: 'Verdana'
};

/* global HTMLElement */
class CompassGlobeDisplay extends HTMLElement {

	static get observedAttributes() {
		return [
			"width",  // Integer. Canvas width
			"height", // Integer. Canvas height
			"value",  // Float. Numeric value to display
			"label"   // String, like TWS, AWS, etc
		];
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'}); // 'open' means it is accessible from external JavaScript.
		// create and append a <canvas>
		this.canvas = document.createElement("canvas");
		let fallbackElemt = document.createElement("h1");
		let content = document.createTextNode("This is a Compass-Globe WebComponent, on an HTML5 canvas");
		fallbackElemt.appendChild(content);
		this.canvas.appendChild(fallbackElemt);
		this.shadowRoot.appendChild(this.canvas);

		// Default values
		this._value = 0;
		this._width = 250;
		this._height = 100;
		this._label = "VAL";

		this._previousClassName = "";
		this.compassGlobeColorConfig = compassGlobeDefaultColorConfig;

		if (compassGlobeVerbose) {
			console.log("Data in Constructor:", this._value);
		}
	}

	// Called whenever the custom element is inserted into the DOM.
	connectedCallback() {
		if (compassGlobeVerbose) {
			console.log("connectedCallback invoked, 'value' is [", this.value, "]");
		}
		this.repaint();
	}

	// Called whenever the custom element is removed from the DOM.
	disconnectedCallback() {
		if (compassGlobeVerbose) {
			console.log("disconnectedCallback invoked");
		}
	}

	// Called whenever an attribute is added, removed or updated.
	// Only attributes listed in the observedAttributes property are affected.
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (compassGlobeVerbose) {
			console.log("attributeChangedCallback invoked on " + attrName + " from " + oldVal + " to " + newVal);
		}
		switch (attrName) {
			case "value":
				this._value = parseFloat(newVal);
				break;
			case "width":
				this._width = parseInt(newVal);
				break;
			case "height":
				this._height = parseInt(newVal);
				break;
			case "label":
				this._label = newVal;
				break;
			default:
				break;
		}
		this.repaint();
	}

	// Called whenever the custom element has been moved into a new document.
	adoptedCallback() {
		if (compassGlobeVerbose) {
			console.log("adoptedCallback invoked");
		}
	}

	set value(option) {
		this.setAttribute("value", option);
		if (compassGlobeVerbose) {
			console.log(">> Value option:", option);
		}
//	this.repaint(); // Done in attributeChangedCallback
	}

	set width(val) {
		this.setAttribute("width", val);
	}

	set height(val) {
		this.setAttribute("height", val);
	}

	set label(val) {
		this.setAttribute("label", val);
	}

	set shadowRoot(val) {
		this._shadowRoot = val;
	}

	get value() {
		return this._value;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get label() {
		return this._label;
	}

	get shadowRoot() {
		return this._shadowRoot;
	}

	// Component methods
	getColorConfig(classNames) {
		let colorConfig = compassGlobeDefaultColorConfig;
		let classes = classNames.split(" ");
		for (let cls = 0; cls < classes.length; cls++) {
			let cssClassName = classes[cls];
			for (let s = 0; s < document.styleSheets.length; s++) {
				// console.log("Walking though ", document.styleSheets[s]);
				try {
					for (let r = 0; document.styleSheets[s].cssRules !== null && r < document.styleSheets[s].cssRules.length; r++) {
						let selector = document.styleSheets[s].cssRules[r].selectorText;
						//			console.log(">>> ", selector);
						if (selector !== undefined && (selector === '.' + cssClassName || (selector.indexOf('.' + cssClassName) > -1 && selector.indexOf(COMPASS_GLOBE_TAG_NAME) > -1))) { // Cases like "tag-name .className"
							//				console.log("  >>> Found it! [%s]", selector);
							let cssText = document.styleSheets[s].cssRules[r].style.cssText;
							let cssTextElems = cssText.split(";");
							cssTextElems.forEach((elem) => {
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
		this.drawCompassGlobe();
	}

	drawCompassGlobe() {

		let currentStyle = this.className;
		if (this._previousClassName !== currentStyle || true) {
			// Reload
			//	console.log("Reloading CSS");
			try {
				this.compassGlobeColorConfig = this.getColorConfig(currentStyle);
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

		let grd = context.createLinearGradient(0, 5, 0, this.height);
		grd.addColorStop(0, this.compassGlobeColorConfig.displayBackgroundGradient.from); // 0  Beginning
		grd.addColorStop(1, this.compassGlobeColorConfig.displayBackgroundGradient.to); // 1  End
		context.fillStyle = grd;

		// Background
		CompassGlobeDisplay.roundRect(context, 0, 0, this.canvas.width, this.canvas.height, 10, true, false);

		context.fillStyle = this.compassGlobeColorConfig.displayColor;
		// Label
		context.font = "bold " + Math.round(scale * 16) + "px " + this.compassGlobeColorConfig.labelFont;
		context.fillText(this.label, 5, 18);

		// The globe
		// Colors: See https://htmlcolorcodes.com/color-names/
		// 1 - Background
		let radius = Math.min(this.canvas.height, this.canvas.width) / 2;
		let globeGrd = context.createLinearGradient(0, 5, 0, radius);
		globeGrd.addColorStop(0, 'black');     // 0  Beginning
		globeGrd.addColorStop(1, 'rgb(47, 79, 79)');  // 1  End
		context.fillStyle = globeGrd;
		context.beginPath();
		context.arc(this.canvas.width / 2, this.canvas.height / 2, radius, 0, 2 * Math.PI, false);
		context.closePath();
		context.fill();
		// 2 - The reflection on top
		globeGrd = context.createLinearGradient(0, 5, 0, radius);
		globeGrd.addColorStop(0, 'rgba(211, 211, 211, 0.25)');  // 0  Beginning
		globeGrd.addColorStop(1, 'rgba(255, 255, 255, 0.25)');  // 1  End
		context.fillStyle = globeGrd;
		context.beginPath();
		context.ellipse(this.canvas.width / 2, this.canvas.height / 4, radius * 0.5, radius * 0.25, 0, 2 * Math.PI, false);
		context.closePath();
		context.fill();

		// The rose, oriented
		context.fillStyle = this.compassGlobeColorConfig.displayColor;
		// The notches - TODO Tweak that
		context.strokeStyle = this.compassGlobeColorConfig.displayColor;
		// context.beginPath();

		for (let i = 0; i < 360; i++) {
			let notch = this._value - i;

			// console.log(`i: ${i}, notch=${notch}, cos(notch): ${Math.cos(Math.toRadians(notch))}`);

			context.lineWidth = 1;
			if (Math.cos(Math.toRadians(i)) >= 0) {
				if (notch % 5 === 0) {

					let xOffset = radius * Math.sin(Math.toRadians(i));

					console.log(`i: ${i}, notch=${notch}, cos(notch): ${Math.cos(Math.toRadians(notch))}, offset: ${xOffset}`);

					context.beginPath();
					context.moveTo((this.canvas.width / 2) + xOffset, (this.canvas.height / 2) + 20);
					if (notch % 45 === 0) {
						context.lineWidth = 5;
					}
					if (notch % 15 === 0) { // Major / Minor
						context.lineTo((this.canvas.width / 2) + xOffset, (this.canvas.height / 2) + 45);
					} else {
						context.lineTo((this.canvas.width / 2) + xOffset, (this.canvas.height / 2) + 30);
					}
					context.closePath();
					context.stroke();
				}
			}
		}
		// context.closePath();
		// context.stroke();

		// Value
		let fontSize = Math.round(scale * 30);
		context.font = "bold " + fontSize + "px " + this.compassGlobeColorConfig.valueFont;
		let strVal = this._value.toFixed(this.compassGlobeColorConfig.valueNbDecimal);
		let metrics = context.measureText(strVal);
		let len = metrics.width;

		context.fillText(strVal, (this.canvas.width / 2) - (len / 2), (this.canvas.height / 2) + (fontSize / 2));

		// 'red' Axis
		context.lineWidth = 1;
		context.strokeStyle = 'red'; // this.compassGlobeColorConfig.displayColor;
		context.beginPath();
		context.moveTo((this.canvas.width / 2), 0);
		context.lineTo((this.canvas.width / 2), this.canvas.height);
		context.closePath();
		context.stroke();
	}

	static roundRect(ctx, x, y, width, height, radius, fill, stroke) {
		if (fill === undefined) {
			fill = true;
		}
		if (stroke === undefined) {
			stroke = true;
		}
		if (radius === undefined) {
			radius = 5;
		}
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
		if (stroke) {
			ctx.stroke();
		}
		if (fill) {
			ctx.fill();
		}
	}
}

// Associate the tag and the class
window.customElements.define(COMPASS_GLOBE_TAG_NAME, CompassGlobeDisplay);
