/*
 * Attributes:
 * Values: width, height, BSP, HDG, AWS, AWA, TWS, TWA, TWD, CDR, CSP, Leeway, CMG, VMG, B2WP, Decl, dev
 * Booleans: displayCurrent, displayLabels, displayVMG, vmgOnWind or vmgOnWP, with D, d, W
 * Options: BoatShape (mono, cata, tri), WPName
 *
 * Designed to represent the data coming from the NavServer.
 * NOTE: The consistency of the data is not maintained by the Component!!
 * Example:
{
  "Damping": 30,
  "HDG Offset": 0,
  "To Waypoint": "RANGI   ",
  "CDR": {
    "angle": 115.39230004857473
  },
  "Daily": {
    "distance": 12.2
  },
  "Max Leeway": 10,
  "VMG on Wind": -3.8584310339481522,
  "HDG c.": {
    "angle": 213
  },
  "CMG": {
    "angle": 222.01692220976113
  },
  "BSP": {
    "speed": 7.1
  },
  "TWA": {
    "angle": -130.38922223613739
  },
  "TWD": {
    "angle": 91
  },
  "Current calculated with damping": {
    "30000": {
      "bufferLength": 30000,
      "speed": {
        "speed": 0.32396646536173773
      },
      "direction": {
        "angle": 48.891255868064114
      },
      "nbPoints": 11,
      "oldest": "Sun, 2010 Nov 21 22:07:44 UTC",
      "latest": "Sun, 2010 Nov 21 22:07:44 UTC",
      "len": 30000
    },
    "60000": {
      "bufferLength": 60000,
      "speed": {
        "speed": 0.32396646536173773
      },
      "direction": {
        "angle": 48.891255868064114
      },
      "nbPoints": 11,
      "oldest": "Sun, 2010 Nov 21 22:07:14 UTC",
      "latest": "Sun, 2010 Nov 21 22:07:44 UTC",
      "len": 30000
    },
    "600000": {
      "bufferLength": 600000,
      "speed": {
        "speed": 0.32396646536173773
      },
      "direction": {
        "angle": 48.891255868064114
      },
      "nbPoints": 11,
      "oldest": "Sun, 2010 Nov 21 22:07:14 UTC",
      "latest": "Sun, 2010 Nov 21 22:07:44 UTC",
      "len": 30000
    }
  },
  "Position": {
    "lat": -9.108366666666667,
    "lng": -140.20933333333332
  },
  "Log": {
    "distance": 3013
  },
  "Solar Time": {
    "date": "Nov 21, 2010, 4:46:56 AM",
    "fmtDate": {
      "epoch": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "hour": 12,
      "min": 46,
      "sec": 56
    }
  },
  "BSP Factor": 1,
  "Set and Drift": {
    "speed": 0.32,
    "angle": 49
  },
  "From Waypoint": "",
  "TWS": {
    "speed": 18.5
  },
  "GPS Time": {
    "date": "Nov 21, 2010, 2:07:47 PM",
    "fmtDate": {
      "epoch": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "hour": 22,
      "min": 7,
      "sec": 47
    }
  },
  "Distance to WP": {
    "distance": 561.7
  },
  "AWS Factor": 1,
  "Water Temperature": {
    "temperature": 26.5
  },
  "Small Distance": 0.06425312432932662,
  "NMEA": "$CCVDR,49.0,T,39.0,M,0.32,N*0F\r\n",
  "NMEA_AS_IS": {
    "VLW": "$IIVLW,03013,N,012.2,N*53\r",
    "VHW": "$IIVHW,,,213,M,07.1,N,,*62\r",
    "VDR": "$CCVDR,49.0,T,39.0,M,0.32,N*0F\r\n",
    "GLL": "$IIGLL,0906.498,S,14012.558,W,220745,A,A*5D\r",
    "RMB": "$IIRMB,A,3.00,R,,RANGI   ,,,,,561.70,230,06.7,V,A*02\r",
    "RMC": "$IIRMC,220747,A,0906.502,S,14012.560,W,06.9,215,211110,10,E,A*00\r",
    "DPT": "$IIDPT,001.3,+0.7,*42\r",
    "HDG": "$IIHDG,211,,,10,E*11\r",
    "MWV": "$CCMWV,230.0,T,018.5,N,A*36\r\n",
    "VWR": "$IIVWR,109,L,15.8,N,,,,*7B\r",
    "MTW": "$IIMTW,+26.5,C*39\r",
    "VWT": "$CCVWT,130.4,L,18.5,N,9.5,M,34.3,K*53\r\n",
    "MWD": "$CCMWD,091.0,T,081.0,M,18.5,N,9.5,M*75\r\n"
  },
  "D": {
    "angle": 10
  },
  "XTE": {
    "distance": 3
  },
  "AWA": {
    "angle": -109
  },
  "Depth": {
    "depthInMeters": 2
  },
  "Bearing to WP": {
    "angle": 230
  },
  "W": {
    "angle": 9.01692220976113
  },
  "Speed to WP": {
    "speed": 6.7
  },
  "COG": {
    "angle": 215
  },
  "AWS": {
    "speed": 15.8
  },
  "HDG true": {
    "angle": 222.01692220976113
  },
  "AWA Offset": 0,
  "CSP": {
    "speed": 0.8796925520240182
  },
  "d": {
    "angle": -0.9830777902388692
  },
  "Default Declination": {
    "angle": 14
  },
  "Deviation file name": "dp_2011_04_15.csv",
  "HDG mag.": {
    "angle": 212.01692220976113
  },
  "SOG": {
    "speed": 6.9
  },
  "Leeway": {
    "angle": 0
  },
  "GPS Date & Time": {
    "date": "Nov 21, 2010, 2:07:47 PM",
    "epoch": 1290377267000,
    "fmtDate": {
      "epoch": 1290377267000,
      "year": 2010,
      "month": 11,
      "day": 21,
      "hour": 22,
      "min": 7,
      "sec": 47
    }
  },
  "WayPoint pos": {
    "lat": 0,
    "lng": 0
  },
  "VMG to Waypoint": 6.664888201394572,
  "Steer": "R"
}
 *
 */
const boatOverviewVerbose = true;
const BOAT_OVERVIEW_TAG_NAME = 'boat-overview';

const boatOverviewDefaultColorConfig = {
	bgColor: 'white',
	displayBackgroundGradient: {
		from: 'black',
		to: 'gray'
	},
	gridColor: 'rgba(255, 255, 255, 0.7)',
	displayColor: 'cyan',
	valueNbDecimal: 2,
	labelFont: 'Courier New',
	valueFont: 'Arial'
};

import * as Utilities from "../utilities/Utilities.js";

/* global HTMLElement */
class BoatOverview extends HTMLElement {

	static get observedAttributes() {
		return [
			"width",        // Integer. Canvas width
			"height",       // Integer. Canvas height
			"bsp",          // Float. Boat Speed Numeric value, knots
			"hdg",          // Integer, True Heading [0..360]
			"aws",          // Float. App Wind Speed Numeric value, knots
			"awa",          // Integer. App Wind Angle [-180..180] Numeric value
			"tws",          // Float. True Wind Speed Numeric value, knots
			"twa",          // Integer. True Wind Angle [-180..180] Numeric value
			"twd",          // Integer. True Wind Direction [0..360] Numeric value
			"vmg",          // Float. Velocity Made Good value, knots
			"sog",          // Float. Speed Over Ground Numeric value, knots
			"cog",          // Integer. Course Over Ground [0..360] Numeric value
			"cdr",          // Integer. Current Direction [0..360] Numeric value
			"csp",          // Float. Current Speed Numeric value, knots
			"lwy",          // Float. Leeway [-180..180] Numeric value
			"cmg",          // Integer. Course Made Good [0..360] Numeric value
			"b2wp",         // Integer. Bearing to Next Way Point [0..360] Numeric value
			"decl",         // Float. Magnetic Declination Numeric value +/-
			"dev",          // Float. Magnetic deviation Numeric value +/-
			"with-current",  // Boolean. Draw current
			"with-labels",   // Boolean. Draw Labels on graphic
			"with-vmg",      // Boolean. Draw VMG
			"vmg-on-wind",    // Boolean. true: on Wind, false: on WayPoint
			"with-w",        // Boolean. Draw D & d
			"boat-shape",    // String. MONO, CATA, TRI
			"wp-name"        // String. Next WayPoint name

		];
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'}); // 'open' means it is accessible from external JavaScript.
		// create and append a <canvas>
		this.canvas = document.createElement("canvas");
		let fallbackElemt = document.createElement("h1");
		let content = document.createTextNode("This is a Boat Overview Web Component, on an HTML5 canvas");
		fallbackElemt.appendChild(content);
		this.canvas.appendChild(fallbackElemt);
		this.shadowRoot.appendChild(this.canvas);

		// Default values
		this._width = 600;
		this._height = 500;

		this._bsp = 0; // Boat Speed
		this._hdg = 0; // True Heading
		this._aws = 0; // App Wind Speed
		this._awa = 0; // App Wind Angle
		this._tws = 0; // True Wind Speed
		this._twa = 0; // True Wind Angle
		this._twd = 0; // True Wind Direction
		this._vmg = 0; // Velocity Made Good
		this._cog = 0; // Course Over Ground
		this._sog = 0; // Speed Over Ground
		this._cdr = 0; // Current Direction
		this._csp = 0; // Current Speed
		this._lwy = 0; // Leeway
		this._cmg = 0; // Course Made Good
		this._b2wp = 0; // Bearing to WP
		this._Decl = 0;   // Declination
		this._dev = 0;   // deviation

		this._withCurrent = false;
		this._withLabels = true
		this._withVMG = true;
		this._vmgOnWind = true; // False means vmg on WP
		this._withW = false;    // Requires D and d

		this._boatShape = "MONO"; // "CATA"; //"MONO"; // "TRI";
		this._wpName = "";

		this._previousClassName = "";
		this.boatOverviewColorConfig = boatOverviewDefaultColorConfig;

		this.speedScale = 10; // Default value

		this.WL_RATIO_COEFF = 0.75; // Ratio to apply to (3.5 * Width / Length)
		this.BOAT_LENGTH = 100; // 50;
	}

	// Called whenever the custom element is inserted into the DOM.
	connectedCallback() {
		if (boatOverviewVerbose) {
			console.log("connectedCallback invoked.");
		}
		this.repaint();
	}

	// Called whenever the custom element is removed from the DOM.
	disconnectedCallback() {
		if (boatOverviewVerbose) {
			console.log("disconnectedCallback invoked");
		}
	}

	// Called whenever an attribute is added, removed or updated.
	// Only attributes listed in the observedAttributes property are affected.
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (boatOverviewVerbose) {
			console.log("attributeChangedCallback invoked on " + attrName + " from " + oldVal + " to " + newVal);
		}
		switch (attrName) {
			case "width":
				this._width = parseInt(newVal);
				break;
			case "height":
				this._height = parseInt(newVal);
				break;
			case "bsp":
				this._bsp = parseFloat(newVal);
				break;
			case "hdg":
				this._hdg = parseInt(newVal);
				break;
			case "aws":
				this._aws = parseFloat(newVal);
				break;
			case "awa":
				this._awa = parseInt(newVal);
				break;
			case "tws":
				this._tws = parseFloat(newVal);
				break;
			case "twa":
				this._twa = parseInt(newVal);
				break;
			case "twd":
				this._twd = parseInt(newVal);
				break;
			case "vmg":
				this._vmg = parseFloat(newVal);
				break;
			case "sog":
				this._sog = parseFloat(newVal);
				break;
			case "cog":
				this._cog = parseInt(newVal);
				break;
			case "cdr":
				this._cdr = parseInt(newVal);
				break;
			case "csp":
				this._csp = parseFloat(newVal);
				break;
			case "lwy":
				this._lwy = parseFloat(newVal);
				break;
			case "cmg":
				this._cmg = parseInt(newVal);
				break;
			case "b2wp":
				this._b2wp = parseFloat(newVal);
				break;
			case "decl":
				this._D = parseFloat(newVal);
				break;
			case "dev":
				this._d = parseFloat(newVal);
				break;

			case "with-current":
				this._withCurrent = (newVal === 'true');
				break;
			case "with-labels":
				this._withLabels = (newVal === 'true');
				break;
			case "with-vmg":
				this._withVMG = (newVal === 'true');
				break;
			case "vmg-on-wind":
				this._vmgOnWind = (newVal === 'true');
				break;
			case "with-w":
				this._withW = (newVal === 'true');
				break;

			case "boat-shape":
				console.log('BoatShape changing')
				if (newVal === 'MONO' || newVal === 'CATA' || newVal === 'TRI') {
					this._boatShape = newVal;
				}
				break;
			case "wp-name":
				this._wpName = newVal;
				break;
			default:
				break;
		}
		this.repaint();
	}

	// Called whenever the custom element has been moved into a new document.
	adoptedCallback() {
		if (boatOverviewVerbose) {
			console.log("adoptedCallback invoked");
		}
	}

	// Setters
	set width(val) {
		this.setAttribute("width", val);
	}

	set height(val) {
		this.setAttribute("height", val);
	}

	set bsp(val) {
		this.setAttribute("bsp", val);
	}

	set hdg(val) {
		this.setAttribute("hdg", val);
	}

	set aws(val) {
		this.setAttribute("aws", val);
	}

	set awa(val) {
		this.setAttribute("awa", val);
	}

	set tws(val) {
		this.setAttribute("tws", val);
	}

	set twa(val) {
		this.setAttribute("twa", val);
	}

	set twd(val) {
		this.setAttribute("twd", val);
	}

	set vmg(val) {
		this.setAttribute("vmg", val);
	}

	set cog(val) {
		this.setAttribute("cog", val);
	}

	set sog(val) {
		this.setAttribute("sog", val);
	}

	set cdr(val) {
		this.setAttribute("cdr", val);
	}

	set csp(val) {
		this.setAttribute("csp", val);
	}

	set lwy(val) {
		this.setAttribute("lwy", val);
	}

	set cmg(val) {
		this.setAttribute("cmg", val);
	}

	set b2wp(val) {
		this.setAttribute("b2wp", val);
	}

	set Decl(val) {
		this.setAttribute("decl", val);
	}

	set dev(val) {
		this.setAttribute("dev", val);
	}

	set withCurrent(val) {
		this.setAttribute("with-current", val);
	}

	set withLabels(val) {
		this.setAttribute("with-labels", val);
	}

	set withVMG(val) {
		this.setAttribute("with-vmg", val);
	}

	set vmgOnWind(val) {
		this.setAttribute("vmg-on-wind", val);
	}

	set withW(val) {
		this.setAttribute("with-w", val);
	}

	set wpName(val) {
		this.setAttribute("wp-name", val);
	}

	set boatShape(val) {
		this.setAttribute("boat-shape", val);
	}

	set shadowRoot(val) {
		this._shadowRoot = val;
	}

	// Getters
	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get bsp() {
		return this._bsp;
	}

	get hdg() {
		return this._hdg;
	}

	get aws() {
		return this._aws;
	}

	get awa() {
		return this._awa;
	}

	get twa() {
		return this._twa;
	}

	get tws() {
		return this._tws;
	}

	get twd() {
		return this._twd;
	}

	get vmg() {
		return this._vmg;
	}

	get cog() {
		return this._cog;
	}

	get sog() {
		return this._sog;
	}

	get cdr() {
		return this._cdr;
	}

	get csp() {
		return this._csp;
	}

	get lwy() {
		return this._lwy;
	}

	get cmg() {
		return this._cmg;
	}

	get b2wp() {
		return this._b2wp;
	}

	get Decl() {
		return this._Decl;
	}

	get dev() {
		return this._dev;
	}

	get withCurrent() {
		return this._withCurrent;
	}

	get withLabels() {
		return this._withLabels;
	}

	get withVMG() {
		return this._withVMG;
	}

	get vmgOnWind() {
		return this._vmgOnWind;
	}

	get withW() {
		return this._withW;
	}

	get wpName() {
		return this._wpName;
	}

	get boatShape() {
		return this._boatShape;
	}

	get shadowRoot() {
		return this._shadowRoot;
	}

	// Component methods
	getColorConfig(classNames) {
		let colorConfig = boatOverviewDefaultColorConfig;
		let classes = classNames.split(" ");
		for (let cls = 0; cls < classes.length; cls++) {
			let cssClassName = classes[cls];
			for (let s = 0; s < document.styleSheets.length; s++) {
				// console.log("Walking though ", document.styleSheets[s]);
				try {
					for (let r = 0; document.styleSheets[s].cssRules !== null && r < document.styleSheets[s].cssRules.length; r++) {
						let selector = document.styleSheets[s].cssRules[r].selectorText;
						//			console.log(">>> ", selector);
						if (selector !== undefined && (selector === '.' + cssClassName || (selector.indexOf('.' + cssClassName) > -1 && selector.indexOf(BOAT_OVERVIEW_TAG_NAME) > -1))) { // Cases like "tag-name .className"
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
		this.drawBoatOverview();
	}

	getCanvasCenter() {
		let cw = this.width;
		let ch = this.height;
		let distFromRight = Math.min(cw, ch) / 2;

		return { x: cw - distFromRight, y: ch / 2};
	}

	drawTrueWind(context) {
		let cWidth  = this.width;
		let cHeight = this.height;

		let _twd = Utilities.toRadians(this.twd);
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let windLength = this.tws * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = windLength * Math.sin(_twd);
		let dY = - windLength * Math.cos(_twd);
		// create a new line object
		let line = new Line(x + dX, y + dY, x, y);
		// draw the line
		context.strokeStyle = "black";
		context.fillStyle   = "black";
		context.lineWidth = 5;
		line.drawWithAnemoArrowheads(context);
		context.closePath();
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "black";
			context.fillText("TWS:" + this.tws.toFixed(2) + " kts, TWA:" + this.twa + "" /* "�" */, x + dX, y + dY);
		}
	}

	drawAppWind(context) {
		let cWidth  = this.width;
		let cHeight = this.height;

		let wd = this.hdg + this.awa; // Direction the wind is blowing TO
		while (wd > 360) {
			wd -= 360;
		}
		let _awd = Utilities.toRadians(wd);
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let windLength = this.aws * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = windLength * Math.sin(_awd);
		let dY = - windLength * Math.cos(_awd);
		// create a new line object
		let line = new Line(x + dX, y + dY, x, y);
		// draw the line
		context.strokeStyle = "blue";
		context.fillStyle   = "blue";
		context.lineWidth = 5;
		line.drawWithAnemoArrowheads(context);
		context.closePath();
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "blue";
			context.fillText("AWS:" + this.aws + " kts, AWA:" + this.awa + "" /* "�" */, x + dX, y + dY);
		}
	}

	drawBSP(context) {
		if (this.bsp === 0) {
			return;
		}

		let cWidth  = this.width;
		let cHeight = this.height;

		let _hdg = Utilities.toRadians(this.hdg);
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let bspLength = this.bsp * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = bspLength * Math.sin(_hdg);
		let dY = - bspLength * Math.cos(_hdg);
		// create a new line object
		let line = new Line(x, y, x + dX, y + dY);
		// draw the line
		context.strokeStyle = "red";
		context.lineWidth = 3;
		line.drawHollowArrow(context);
		context.closePath();
//    let metrics = context.measureText(valueToDisplay);
//    len = metrics.width;
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "red";
			context.fillText("BSP:" + this.bsp.toFixed(2) + " kts, HDG:" + this.hdg.toFixed(0) + "" /* "�" */, x + dX, y + dY);
		}
	}

	drawCMG(context) {
		if (this.bsp === 0 || this.lwy === 0) {
			return;
		}

		let cWidth  = this.width;
		let cHeight = this.height;

		let _hdg = Utilities.toRadians(this.cmg);
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let bspLength = this.bsp * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = bspLength * Math.sin(_hdg);
		let dY = - bspLength * Math.cos(_hdg);
		// create a new line object
		let line = new Line(x, y, x + dX, y + dY);
		// draw the line
		context.strokeStyle = "cyan";
		context.fillStyle   = "cyan";
		context.lineWidth = 5;
		line.drawWithArrowhead(context);
		context.closePath();
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "cyan";
			context.fillText("CMG:" + this.cmg.toFixed(0) + "" /* "�" */, x + dX, y + dY);
		}
	}

	drawSOG(context) {
		if (this.sog === 0) {
			return;
		}

		let cWidth  = this.width;
		let cHeight = this.height;

		let _hdg = Utilities.toRadians(this.cog);
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let bspLength = this.sog * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = bspLength * Math.sin(_hdg);
		let dY = - bspLength * Math.cos(_hdg);
		// create a new line object
		let line = new Line(x, y, x + dX, y + dY);
		// draw the line
		context.strokeStyle = "pink";
		context.fillStyle   = "pink";
		context.lineWidth = 5;
		line.drawWithArrowhead(context);
		context.closePath();
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "pink";
			context.fillText("SOG:" + this.sog + " kts, COG:" + this.cog + "" /* "�" */, x + dX, y + dY);
			context.strokeStyle = "black";
			context.lineWidth = 1;
//    context.strokeText("SOG:" + sog.toFixed(2) + " kts, COG:" + cog + "" /* "�" */, x + dX, y + dY);
		}
	}

	drawVMG(context) {
		let cWidth = this.width;
		let cHeight = this.height;

		let _hdg = 0;
		context.beginPath();
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		if (this.vmgOnWind) {
			_hdg = Utilities.toRadians(this.twd);
		} else {
			_hdg = Utilities.toRadians(this.b2wp);
			// Display WP direction
			context.strokeStyle = "orange";
			context.fillStyle   = "orange";
			context.lineWidth = 1;
			let len = 0.75 * Math.min(cHeight, cWidth) / 2;
			let _dX = len * Math.sin(_hdg);
			let _dY = - len * Math.cos(_hdg);
			let wpLine = new Line(x, y, x + _dX, y + _dY);
			wpLine.drawWithArrowhead(context);
			context.fillText(this.wpName, x + _dX, y + _dY);
		}

		let bspLength = this.vmg * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dX = bspLength * Math.sin(_hdg);
		let dY = - bspLength * Math.cos(_hdg);
		// create a new line object
		let line = new Line(x, y, x + dX, y + dY);
		// draw the line
		context.strokeStyle = "yellow";
		context.fillStyle   = "yellow";
		context.lineWidth = 5;
		line.drawWithArrowhead(context);
		context.closePath();
		if (this.withLabels) {
			context.save();
			context.font= "bold 12px Arial";
			context.fillStyle = "yellow";
			context.fillText("VMG:" + this.vmg.toFixed(2) + " kts", x + dX, y + dY);
			context.strokeStyle = "black";
			context.lineWidth = 1;
//    context.strokeText("SOG:" + sog.toFixed(2) + " kts, COG:" + cog + "" /* "�" */, x + dX, y + dY);
			context.restore();
		}
		if (context.setLineDash !== undefined) {
			context.setLineDash([5]);
			context.moveTo(x + dX, y + dY);
			let _cog = Utilities.toRadians(this.cog);
			let sogLength = this.sog * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
			dX = sogLength * Math.sin(_cog);
			dY = - sogLength * Math.cos(_cog);
			context.lineTo(x + dX, y + dY);
			context.lineWidth = 1;
			context.stroke();
			// Reset
			context.setLineDash([]);
		}
	}

	drawCurrent(context) {
		if (this.csp === 0) {
			return;
		}

		let cWidth = this.width;
		let cHeight = this.height;

		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let _cmg = Utilities.toRadians(this.cmg);
		let bspLength = this.bsp * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dXcmg = bspLength * Math.sin(_cmg);
		let dYcmg = - bspLength * Math.cos(_cmg);

		let _cog = Utilities.toRadians(this.cog);
		let sogLength = this.sog * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dXcog = sogLength * Math.sin(_cog);
		let dYcog = - sogLength * Math.cos(_cog);

		context.beginPath();
		// create a new line object
		let line = new Line(x + dXcmg, y + dYcmg, x + dXcog, y + dYcog);
		// draw the line
		context.strokeStyle = "LightGreen";
		context.fillStyle   = "LightGreen";
		context.lineWidth = 5;
		line.drawWithArrowhead(context);
		context.closePath();
		if (this.withLabels) {
			context.font= "bold 12px Arial";
			context.fillStyle = "LightGreen";
			context.fillText("CSP:" + this.csp.toFixed(2) + " kts, CDR:" + this.cdr.toFixed(0) + "" /* "�" */, x + dXcog, y + dYcog + 14); // + 14 not to overlap the SOG/COG
		}
	}

	drawVW(context) { // Velocity Wind
		if (this.sog === 0) {
			return;
		}

		let cWidth = this.width;
		let cHeight = this.height;

		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		let wd = this.hdg + this.awa; // Direction the wind is blowing TO
		while (wd > 360) {
			wd -= 360;
		}
		let _awd = Utilities.toRadians(wd);
		context.beginPath();
		let awLength = this.aws * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dXaw = awLength * Math.sin(_awd);
		let dYaw = - awLength * Math.cos(_awd);

		let _twd = Utilities.toRadians(this.twd);
		let twLength = this.tws * ((Math.min(cHeight, cWidth) / 2) / this.speedScale);
		let dXtw = twLength * Math.sin(_twd);
		let dYtw = - twLength * Math.cos(_twd);

		context.beginPath();
		// create a new line object
		let line = new Line(x + dXaw, y + dYaw, x + dXtw, y + dYtw);
		// draw the line
		context.strokeStyle = "pink";
		context.fillStyle   = "pink";
		context.lineWidth = 5;
		line.drawWithAnemoArrowheads(context);
		context.closePath();
	}

	drawBoat(context, trueHeading) { // Boat Shape = MONO, for now.
		let x = [];
		let y = [];// Half, length

		if (this.boatShape === 'MONO') {
			// Width
			x.push(this.WL_RATIO_COEFF * 0); // Bow
			//     Starboard
			x.push(this.WL_RATIO_COEFF * (   1 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (   2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (   2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( 1.5 * this.BOAT_LENGTH) / 7); // Transom, starboard
			//     Port
			x.push(this.WL_RATIO_COEFF * (-1.5 * this.BOAT_LENGTH) / 7); // Transom, port
			x.push(this.WL_RATIO_COEFF * (  -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -1 * this.BOAT_LENGTH) / 7);

			// Length
			y.push((-4 * this.BOAT_LENGTH) / 7); // Bow
			//      Starboard
			y.push((-3 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push( (1 * this.BOAT_LENGTH) / 7);
			y.push( (3 * this.BOAT_LENGTH) / 7);
			//     Port
			y.push( (3 * this.BOAT_LENGTH) / 7);
			y.push( (1 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((-3 * this.BOAT_LENGTH) / 7);

		} else if (this.boatShape === 'CATA') {
			x.push(this.WL_RATIO_COEFF * 0); // Arm, front, center
			// Starboard
			x.push(this.WL_RATIO_COEFF * (   1 * this.BOAT_LENGTH) / 7); // Arm starboard, hull side
			x.push(this.WL_RATIO_COEFF * ( 1.5 * this.BOAT_LENGTH) / 7); // Starboard bow
			x.push(this.WL_RATIO_COEFF * (   2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (   2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (   2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( 1.8 * this.BOAT_LENGTH) / 7); // Starboard transform, ext
			x.push(this.WL_RATIO_COEFF * ( 1.2 * this.BOAT_LENGTH) / 7); // Starboard transform, int
			x.push(this.WL_RATIO_COEFF * (   1 * this.BOAT_LENGTH) / 7); // Arm, back, starboard, hull side
			x.push(this.WL_RATIO_COEFF * (   0 * this.BOAT_LENGTH) / 7); // Arm, back, starboard, center
			// Port
			x.push(this.WL_RATIO_COEFF * (  -0 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -1 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (-1.2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (-1.8 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (-1.5 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  -1 * this.BOAT_LENGTH) / 7);

			// Length
			y.push((-1 * this.BOAT_LENGTH) / 7);
			//   Starboard
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((-4 * this.BOAT_LENGTH) / 7); // Bow
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((0 * this.BOAT_LENGTH) / 7);
			y.push((1 * this.BOAT_LENGTH) / 7);
			y.push((3 * this.BOAT_LENGTH) / 7);
			y.push((3 * this.BOAT_LENGTH) / 7);
			y.push((1 * this.BOAT_LENGTH) / 7);
			y.push((1 * this.BOAT_LENGTH) / 7);
			//    Port
			y.push((1 * this.BOAT_LENGTH) / 7);
			y.push((1 * this.BOAT_LENGTH) / 7); // Bow
			y.push((3 * this.BOAT_LENGTH) / 7);
			y.push((3 * this.BOAT_LENGTH) / 7);
			y.push((1 * this.BOAT_LENGTH) / 7);
			y.push((0 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((-4 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);

		} else if (this.boatShape === 'TRI') {
			// Width
			x.push(this.WL_RATIO_COEFF * 0); // Bow, center hull
			// Starboard
			x.push(this.WL_RATIO_COEFF * (  0.3 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  0.6 * this.BOAT_LENGTH) / 7); // Arm, front, starboard, inside
			x.push(this.WL_RATIO_COEFF * (  1.6 * this.BOAT_LENGTH) / 7); // Arm, front, starboard, outside
			x.push(this.WL_RATIO_COEFF * (  1.8 * this.BOAT_LENGTH) / 7); // Outrigger bow
			x.push(this.WL_RATIO_COEFF * (    2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (    2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (  1.9 * this.BOAT_LENGTH) / 7); // Outrigger transom, ext
			x.push(this.WL_RATIO_COEFF * (  1.7 * this.BOAT_LENGTH) / 7); // Outrigger transom, int
			x.push(this.WL_RATIO_COEFF * (  1.6 * this.BOAT_LENGTH) / 7); // Arm, back, starboard, outside
			x.push(this.WL_RATIO_COEFF * (  0.6 * this.BOAT_LENGTH) / 7); // Arm, back, starboard, inside
			x.push(this.WL_RATIO_COEFF * (  0.3 * this.BOAT_LENGTH) / 7); // Main hull, transom starboard,
			// Port
			x.push(this.WL_RATIO_COEFF * ( -0.3 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( -0.6 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( -1.6 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( -1.7 * this.BOAT_LENGTH) / 7); // Outrigger transom, int
			x.push(this.WL_RATIO_COEFF * ( -1.9 * this.BOAT_LENGTH) / 7); // Outrigger transom, ext
			x.push(this.WL_RATIO_COEFF * (   -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * (   -2 * this.BOAT_LENGTH) / 7);
			x.push(this.WL_RATIO_COEFF * ( -1.8 * this.BOAT_LENGTH) / 7); // Outrigger bow
			x.push(this.WL_RATIO_COEFF * ( -1.6 * this.BOAT_LENGTH) / 7); // Arm, front, starboard, outside
			x.push(this.WL_RATIO_COEFF * ( -0.6 * this.BOAT_LENGTH) / 7); // Arm, front, starboard, inside
			x.push(this.WL_RATIO_COEFF * ( -0.3 * this.BOAT_LENGTH) / 7);

			// Length
			y.push((-4 * this.BOAT_LENGTH) / 7); // Bow
			// Starboard
			y.push((-3 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7); // Starboard arm, front
			y.push((-1 * this.BOAT_LENGTH) / 7); // Starboard arm, front, outrigger
			y.push((-2.6 * this.BOAT_LENGTH) / 7); // Starboard outrigger bow
			y.push((-1.5 * this.BOAT_LENGTH) / 7);
			y.push(( 1.5 * this.BOAT_LENGTH) / 7);
			y.push(( 2.5 * this.BOAT_LENGTH) / 7); // Starboard transom, ext
			y.push(( 2.5 * this.BOAT_LENGTH) / 7); // Starboard transom, ext
			y.push(( 1 * this.BOAT_LENGTH) / 7); // Starboard arm, back, outrigger
			y.push(( 1 * this.BOAT_LENGTH) / 7); // Starboard arm, hull
			y.push(( 3 * this.BOAT_LENGTH) / 7);
			// Port
			y.push(( 3 * this.BOAT_LENGTH) / 7);
			y.push(( 1 * this.BOAT_LENGTH) / 7);
			y.push(( 1 * this.BOAT_LENGTH) / 7);
			y.push(( 2.5 * this.BOAT_LENGTH) / 7);
			y.push(( 2.5 * this.BOAT_LENGTH) / 7);
			y.push(( 1.5 * this.BOAT_LENGTH) / 7);
			y.push((-1.5 * this.BOAT_LENGTH) / 7);
			y.push((-2.6 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((-1 * this.BOAT_LENGTH) / 7);
			y.push((-3 * this.BOAT_LENGTH) / 7);
		}
		let xPoints = [];
		let yPoints = [];

		// Rotation matrix:
		// | cos(alpha)  -sin(alpha) |
		// | sin(alpha)   cos(alpha) |

		let center = this.getCanvasCenter();
		let ptX = center.x;
		let ptY = center.y;

		for (let i=0; i<x.length; i++) { // Rotation
			let dx = x[i] * Math.cos(Utilities.toRadians(trueHeading)) + (y[i] * (-Math.sin(Utilities.toRadians(trueHeading))));
			let dy = x[i] * Math.sin(Utilities.toRadians(trueHeading)) + (y[i] *   Math.cos(Utilities.toRadians(trueHeading)));
			xPoints.push(Math.round(ptX + dx));
			yPoints.push(Math.round(ptY + dy));
		}
		context.fillStyle = 'gray';
		context.beginPath();
		context.moveTo(xPoints[0], yPoints[0]);
		for (let i=1; i<xPoints.length; i++) {
			context.lineTo(xPoints[i], yPoints[i]);
		}
		context.closePath();
		context.fill();
		context.strokeStyle = 'blue';
		context.lineWidth = 2;
		context.stroke();
	}

	drawBoatOverview() {

		let currentStyle = this.className;
		if (this._previousClassName !== currentStyle || true) {
			// Reload
			//	console.log("Reloading CSS");
			try {
				this.boatOverviewColorConfig = this.getColorConfig(currentStyle);
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
		grd.addColorStop(0, this.boatOverviewColorConfig.displayBackgroundGradient.from); // 0  Beginning
		grd.addColorStop(1, this.boatOverviewColorConfig.displayBackgroundGradient.to); // 1  End
		context.fillStyle = grd;
		context.fillRect(0, 0, this.width, this.height);

		context.fillStyle = this.boatOverviewColorConfig.displayColor;

		// The actual Graph:
		let maxSpeed = 5;
		maxSpeed = Math.max(maxSpeed, this.sog);
		maxSpeed = Math.max(maxSpeed, this.bsp);
		maxSpeed = Math.max(maxSpeed, this.tws);
		maxSpeed = Math.max(maxSpeed, this.aws);
		this.speedScale = 5 * (Math.ceil(maxSpeed / 5));

		let cWidth  = this.width;
		let cHeight = this.height;


//  context.beginPath();
//  context.lineWidth = 1;
//  context.strokeStyle = 'black';
//  context.strokeText("Overview", 10, 20); // Outlined
//  context.closePath();
		// Circles
		let center = this.getCanvasCenter();
		let x = center.x;
		let y = center.y;

		context.strokeStyle = 'gray';
		for (let circ=1; circ<=this.speedScale; circ++) {
			let radius = Math.round(circ * ((Math.min(cHeight, cWidth) / 2) / this.speedScale));
			context.beginPath();
			if (circ % 5 == 0) {
				context.lineWidth = 3;
			} else {
				context.lineWidth = 1;
			}
			context.arc(x, y, radius, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
		}

		this.drawBoat(context, this.hdg);
		this.drawTrueWind(context);
		this.drawAppWind(context);
		this.drawVW(context);
		this.drawBSP(context);
		this.drawCMG(context);
		this.drawSOG(context);
		if (this.withCurrent) {
			this.drawCurrent(context);
		}
		if (this.withVMG) {
			this.drawVMG(context);
		}
		// Display values
		// See http://www.w3schools.com/tags/ref_entities.asp, &deg; = &#176;
		context.fillStyle = 'lime';
		context.font="bold 16px Courier New";
		let txtY = 20;
		var space = 18;
		let col1 = 10, col2 = 90;
		context.fillText("BSP", col1, txtY);
		context.fillText(this.bsp + " kts", col2, txtY);
		txtY += space;
		context.fillText("HDG", col1, txtY);
		context.fillText(this.hdg.toFixed(0) + "" /* "�" */, col2, txtY);
		txtY += space;
		context.fillText("AWS", col1, txtY);
		context.fillText(this.aws + " kts", col2, txtY);
		txtY += space;
		context.fillText("AWA", col1, txtY);
		context.fillText(this.awa + "" /* "�" */, col2, txtY);
		context.fillStyle = 'cyan';
		txtY += space;
		context.fillText("TWS", col1, txtY);
		context.fillText(this.tws.toFixed(2) + " kts", col2, txtY);
		txtY += space;
		context.fillText("TWA", col1, txtY);
		context.fillText(this.twa + "" /* "�" */, col2, txtY);
		txtY += space;
		context.fillText("TWD", col1, txtY);
		context.fillText(this.twd + "" /* "�" */, col2, txtY);
		txtY += space;
		context.fillText("CDR", col1, txtY);
		context.fillText(this.cdr.toFixed(0) + "" /* "�" */, col2, txtY);
		txtY += space;
		context.fillText("CSP", col1, txtY);
		context.fillText(this.csp.toFixed(2) + " kts", col2, txtY);

		txtY += space;
		context.fillText("leeway", col1, txtY);
		context.fillText(this.lwy.toFixed(2) + "" /* "�" */, col2, txtY);
		txtY += space;
		context.fillText("CMG", col1, txtY);
		context.fillText(this.cmg.toFixed(0) + "" /* "�" */, col2, txtY);
	}
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}


class Line {

// Line with arrow head
	constructor(x1, y1, x2, y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;

		this.HEAD_LENGTH = 20;
		this.HEAD_WIDTH  =  6;
	}


	rotate(p, angle) {
		let r = new Point(Math.round((p.x * Math.cos(Utilities.toRadians(angle))) + (p.y * Math.sin(Utilities.toRadians(angle)))),
				Math.round((p.x * -Math.sin(Utilities.toRadians(angle))) + (p.y * Math.cos(Utilities.toRadians(angle)))));
		return r;
	}

	drawWithArrowhead(ctx) {
		this.drawWithArrowheads(ctx, false);
	}

	drawWithArrowheads(ctx, both) {
		if (both === undefined) {
			both = true;
		}
		// arbitrary styling
//  ctx.strokeStyle = "blue";
//  ctx.fillStyle   = "blue";
//  ctx.lineWidth   = 1;

		// draw the line
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();

		if (both) {
			// draw the starting arrowhead
			let startRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
			startRadians += ((this.x2 > this.x1) ? -90 : 90) * Math.PI / 180;
			this.drawArrowhead(ctx, this.x1, this.y1, startRadians);
		}
		// draw the ending arrowhead
		let endRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
		endRadians += ((this.x2 > this.x1) ? 90 : -90) * Math.PI / 180;
		this.drawArrowhead(ctx, this.x2, this.y2, endRadians);
	}

	drawWithAnemoArrowheads(ctx) {
		// draw the line
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();

		let endRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
		endRadians += ((this.x2 > this.x1) ? 90 : -90) * Math.PI / 180;
		this.drawArrowhead(ctx, this.x2 - (this.x2 - this.x1) / 2, this.y2 - (this.y2 - this.y1) / 2, endRadians);
	}

	drawHollowArrow(ctx) {
		let headLength = 30;
		let arrowWidth = 10; // Wave width
		let headWidth = 20;

		let dir = Utilities.getDir((this.x1 - this.x2), (this.y2 - this.y1));
		let len = Math.sqrt(((this.x1 - this.x2) * (this.x1 - this.x2)) + ((this.y2 - this.y1) * (this.y2 - this.y1)));

		let one, two, three, four, five, six, seven, eight;
		one = new Point(0, 0);
		two = new Point(-arrowWidth / 2, 0);
		three = new Point(-arrowWidth / 2, -(Math.round(len - headLength)));
		four = new Point(-headWidth / 2, -(Math.round(len - headLength)));
		five = new Point(0, -Math.round(len)); // to
		six = new Point(headWidth / 2, -(Math.round(len - headLength)));
		seven = new Point(arrowWidth / 2, -(Math.round(len - headLength)));
		eight = new Point(arrowWidth / 2, 0);
		one = this.rotate(one, -dir);
		two = this.rotate(two, -dir);
		three = this.rotate(three, -dir);
		four = this.rotate(four, -dir);
		five = this.rotate(five, -dir);
		six = this.rotate(six, -dir);
		seven = this.rotate(seven, -dir);
		eight = this.rotate(eight, -dir);

		let x = [];
		let y = [];

		x.push(this.x1 + one.x);
		x.push(this.x1 + two.x);
		x.push(this.x1 + three.x);
		x.push(this.x1 + four.x);
		x.push(this.x1 + five.x);
		x.push(this.x1 + six.x);
		x.push(this.x1 + seven.x);
		x.push(this.x1 + eight.x);

		y.push(this.y1 + one.y);
		y.push(this.y1 + two.y);
		y.push(this.y1 + three.y);
		y.push(this.y1 + four.y);
		y.push(this.y1 + five.y);
		y.push(this.y1 + six.y);
		y.push(this.y1 + seven.y);
		y.push(this.y1 + eight.y);

		ctx.beginPath();
		ctx.moveTo(x[0], y[0]);
		for (let i = 1; i < x.length; i++) {
			ctx.lineTo(x[i], y[i]);
		}
		ctx.closePath();
		ctx.stroke();
	}

	drawArrowhead(ctx, x, y, radians) {
		ctx.save();
		ctx.beginPath();
		ctx.translate(x, y);
		ctx.rotate(radians);
		ctx.moveTo(0, 0);
		ctx.lineTo(this.HEAD_WIDTH, this.HEAD_LENGTH);
		ctx.lineTo(-this.HEAD_WIDTH, this.HEAD_LENGTH);
		ctx.closePath();
		ctx.restore();
		ctx.fill();
	}
}

// Associate the tag and the class
window.customElements.define(BOAT_OVERVIEW_TAG_NAME, BoatOverview);
