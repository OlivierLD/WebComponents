"use strict";

const slideshowVerbose = false;
const SLIDE_SHOW_TAG_NAME = 'slide-show';

/**
 * This is a example, using/requiring nested tags
 * <slide-show>
 *   <slide-show-image></slide-show-image>
 *   <slide-show-image></slide-show-image>
 * </slide-show>
 */

/* global HTMLElement */

// See https://www.w3schools.com/jsref/prop_node_nodetype.asp
const ELEMENT_TYPE = 1;
const ATTRIBUTE_TYPE = 2;
const TEXT_TYPE = 3;
const COMMENT_TYPE = 8;
const NODE_TYPE = [
	{ type: 'element', val: ELEMENT_TYPE },
	{ type: 'attribute', val:  ATTRIBUTE_TYPE },
	{ type: 'text', val:  TEXT_TYPE },
	{ type: 'comment', val: COMMENT_TYPE }
];

function nodeTypeFromVal(val) {
	let typeName = 'Unknown';
	for (let i=0; i<NODE_TYPE.length; i++) {
		if (NODE_TYPE[i].val === val) {
			typeName = NODE_TYPE[i].type;
			break;
		}
	}
	return typeName;
}

/**
 * Sample Slide Show
 */
class SlideShow extends HTMLElement {

	static get observedAttributes() {
		return [
			"width",
			"height"
		];
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'}); // 'open' means it is accessible from external JavaScript.
		// create and append an element, a div.

		this.slideshowContainer = document.createElement("div");
		this.slideshowContainer.setAttribute('class', 'slideshow-container');
		this._shadowRoot.appendChild(this.slideshowContainer);

		this.dots = document.createElement("div");
		this.dots.setAttribute('class', 'dots');
		this._shadowRoot.appendChild(this.dots);

		this.slideIndex = 1;

		// TODO Isn't there a better way to define the styles?
		let cssClasses = document.createElement("style");
		cssClasses.innerText =
				'.the-slides {\n' +
				'\t\t\tdisplay: none\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Slideshow container */\n' +
				'\t\t.slideshow-container {\n' +
				'\t\t\tmax-width: 1000px;\n' +
				'\t\t\tposition: relative;\n' +
				'\t\t\tmargin: auto;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Next & previous buttons */\n' +
				'\t\t.prev, .next {\n' +
				'\t\t\tcursor: pointer;\n' +
				'\t\t\tposition: absolute;\n' +
				'\t\t\ttop: 50%;\n' +
				'\t\t\twidth: auto;\n' +
				'\t\t\tpadding: 16px;\n' +
				'\t\t\tmargin-top: -22px;\n' +
				'\t\t\tcolor: cyan; /* white; */\n' +
				'\t\t\tfont-weight: bold;\n' +
				'\t\t\tfont-size: 18px;\n' +
				'\t\t\ttransition: 0.6s ease;\n' +
				'\t\t\tborder-radius: 0 3px 3px 0;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Position the "next button" to the right */\n' +
				'\t\t.next {\n' +
				'\t\t\tright: 0;\n' +
				'\t\t\tborder-radius: 3px 0 0 3px;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* On hover, add a black background color with a little bit see-through */\n' +
				'\t\t.prev:hover, .next:hover {\n' +
				'\t\t\tbackground-color: rgba(0,0,0,0.8);\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Caption text */\n' +
				'\t\t.text {\n' +
				'\t\t\tcolor: cyan; /*#f2f2f2; */\n' +
				'\t\t\tfont-size: 15px;\n' +
				'\t\t\t/*padding: 8px 12px;*/\n' +
				'\t\t\tposition: absolute;\n' +
				'\t\t\tbottom: 26px;\n' +
				'\t\t\twidth: 100%;\n' +
				'\t\t\ttext-align: center;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Number text (1/3 etc) */\n' +
				'\t\t.numbertext {\n' +
				'\t\t\tcolor: cyan; /*  #f2f2f2; */\n' +
				'\t\t\tfont-size: 12px;\n' +
				'\t\t\tpadding: 8px 12px;\n' +
				'\t\t\tposition: absolute;\n' +
				'\t\t\ttop: 0;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* The dots/bullets/indicators */\n' +
				'\t\t.dot {\n' +
				'\t\t\tcursor:pointer;\n' +
				'\t\t\theight: 13px;\n' +
				'\t\t\twidth: 13px;\n' +
				'\t\t\tmargin: 0 2px;\n' +
				'\t\t\tbackground-color: #bbb;\n' +
				'\t\t\tborder-radius: 50%;\n' +
				'\t\t\tdisplay: inline-block;\n' +
				'\t\t\ttransition: background-color 0.6s ease;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t.dots {\n' +
				'\t\t\tposition: relative;\n' +
				'\t\t\ttext-align: center;\n' +
				'\t\t\tbottom: 20px;\n' +
				'\t\t\tmargin: auto;\n' +
				'\t\t\tgrid-area: center;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t.active, .dot:hover {\n' +
				'\t\t\tbackground-color: #717171;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t/* Fading animation */\n' +
				'\t\t.fade {\n' +
				'\t\t\t-webkit-animation-name: fade;\n' +
				'\t\t\t-webkit-animation-duration: 1.5s;\n' +
				'\t\t\tanimation-name: fade;\n' +
				'\t\t\tanimation-duration: 1.5s;\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t@-webkit-keyframes fade {\n' +
				'\t\t\tfrom {opacity: .4}\n' +
				'\t\t\tto {opacity: 1}\n' +
				'\t\t}\n' +
				'\n' +
				'\t\t@keyframes fade {\n' +
				'\t\t\tfrom {opacity: .4}\n' +
				'\t\t\tto {opacity: 1}\n' +
				'\t\t}';

		this._shadowRoot.appendChild(cssClasses);

		this._connected = false;

		// this.addEventListener('click', e => {
		// 	console.log("Clicked");
		// });

		this._forward = () => {
			this.plusSlides(1);
		}
		this._backward = () => {
			this.plusSlides(-1);
		}
	}

	// Called whenever the custom element (Web Comp.) is inserted into the DOM.
	connectedCallback() {
		this._connected = true;
		if (slideshowVerbose) {
			console.log("connectedCallback invoked");
		}
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				// Detect insertion
				if (mutation.addedNodes.length > 0)
					console.info('Node added: ', mutation.addedNodes[0]);
			})
		})
		observer.observe(this, { childList: true });

		if (slideshowVerbose) {
			console.info("At load time:" + this.childElementCount + " child(ren)");
			if (this.childElementCount > 0) {
				this.childNodes.forEach(childNode => {
					console.info("Node type is " + nodeTypeFromVal(childNode.nodeType));
					if (childNode.nodeType === ELEMENT_TYPE) {
						console.info(">> Node name is " + childNode.nodeName);
					} else if (childNode.nodeType === TEXT_TYPE) {
						console.info(">> Node value is " + childNode.nodeValue);
					} else if (childNode.nodeType === ATTRIBUTE_TYPE) {
						console.info(">> Node value is " + childNode.nodeValue);
					} else if (childNode.nodeType === COMMENT_TYPE) {
						console.info(">> Node value is " + childNode.nodeValue);
					}
				});
			}
		}
		this.repaint();
	}

	// Called whenever the custom element is removed from the DOM.
	disconnectedCallback() {
		if (slideshowVerbose) {
			console.log("disconnectedCallback invoked");
		}
	}

	// Called whenever an attribute is added, removed or updated.
	// Only attributes listed in the observedAttributes property are affected.
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (slideshowVerbose) {
			console.log("attributeChangedCallback invoked on " + attrName + " from " + oldVal + " to " + newVal);
		}
		switch (attrName) {
			case "width":
				this._width = parseInt(newVal);
				break;
			case "height":
				this._height = parseInt(newVal);
				break;
			default:
				break;
		}
	}

	// Called whenever the custom element has been moved into a new document.
	adoptedCallback() {
		if (slideshowVerbose) {
			console.log("adoptedCallback invoked");
		}
	}

	set width(val) {
		this.setAttribute("width", val);
	}
	set height(val) {
		this.setAttribute("height", val);
	}

	set shadowRoot(val) {
		this._shadowRoot = val;
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

	repaint() {
		if (this._connected) {
			this.drawComponent();
		}
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}

	currentSlide(n) {
		this.showSlides(this.slideIndex = n);
	}

	showSlides(n) {
		var i;
		let slides = this.slideshowContainer.getElementsByClassName("the-slides");
		let dots = this.dots.getElementsByClassName("dot");
		if (n > slides.length) {
			this.slideIndex = 1
		}
		if (n < 1) {
			this.slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex - 1].style.display = "block";
		dots[this.slideIndex - 1].className += " active";
	}

	drawComponent() {
		if (this._connected) {
			if (this._width !== undefined) {
				this.slideshowContainer.style.width = this._width + "px";
			}
			if (this._height !== undefined) {
				this.slideshowContainer.style.height = this._height + "px";
			}
	//	this.slideshowContainer.onclick = this._action;

			/*
			 * See if Shadow CSS can help... We need several CSS classes here.
			 */

			if (slideshowVerbose) {
				console.info("Drawing Component:" + this.childElementCount + " child(ren) slide(s)");
			}
			let self = this;
			if (this.childElementCount > 0) {
				if (slideshowVerbose) {
					console.log("slideshowContainer has " + this.slideshowContainer.childElementCount + " child nodes");
				}
				if (this.slideshowContainer.childElementCount > 0) {
					// Drop them all
					for (let n=0; n<this.slideshowContainer.childNodes.length; n++) {
						this.slideshowContainer.removeChild(this.slideshowContainer.childNodes[n]);
					}
					// while (this.slideshowContainer.firstChild !== undefined) {
					// 	this.slideshowContainer.removeChild(this.slideshowContainer.firstChild);
					// }
				}
				let idx = 0;
				this.childNodes.forEach(childNode => {
					if (childNode.nodeType === ELEMENT_TYPE) {
//					console.info(">> Node name is " + childNode.nodeName);
						if (childNode.nodeName === 'SLIDE-SHOW-IMAGE') {

							idx += 1;

							let slide = document.createElement("div");
							slide.setAttribute('class', 'the-slides fade');

							let numberDiv = document.createElement('div');
							numberDiv.setAttribute('class', 'numbertext');
							numberDiv.innerText = idx + ' / ' + this.childElementCount;
							slide.appendChild(numberDiv);

							let image = document.createElement("img");
							let src = childNode.getAttribute('src');
							let title = childNode.getAttribute('title');
							image.setAttribute('width', self._width);
							image.setAttribute('height', self._height);
							image.setAttribute('src', src);
							image.setAttribute('title', title);
							slide.appendChild(image);

							let textDiv = document.createElement('div');
							textDiv.setAttribute('class', 'text');
							textDiv.innerText = title;
							slide.appendChild(textDiv);

							if (slideshowVerbose) {
								console.log('Adding slide-image', slide);
							}
							this.slideshowContainer.appendChild(slide);

							let dot = document.createElement('span');
							dot.setAttribute('class', 'dot');
							let gotoSlide = idx;
							dot.addEventListener('click', () => {
								self.currentSlide(gotoSlide);
							});
							this.dots.appendChild(dot);
						}
					}
				});

				let prev = document.createElement('a');
				prev.setAttribute('class', 'prev');
  			prev.onclick = this._backward;
				prev.innerHTML = '&#10094;';

				let next = document.createElement('a');
				next.setAttribute('class', 'next');
				next.onclick = this._forward;
				next.innerHTML = '&#10095;';

				this.slideshowContainer.appendChild(prev);
				this.slideshowContainer.appendChild(next);

				this.slideIndex = 1;
				this.showSlides(this.slideIndex); // First display
			}
		}
	}
}
// Associate the tag and the class
window.customElements.define(SLIDE_SHOW_TAG_NAME, SlideShow);
