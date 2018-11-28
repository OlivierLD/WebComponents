const nestedSampleVerbose = true;
const NESTED_SAMPLE_TAG_NAME = 'nested-sample';

/**
 * This is just extending a <button>
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
 * Nested Sample
 */
class NestedSample extends HTMLElement {

	static get observedAttributes() {
		return [
			"width",
			"height",
			"value"
		];
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'}); // 'open' means it is accessible from external JavaScript.
		// create and append an element
		this.button = document.createElement("button");
		let defaultButtonText = document.createTextNode("default");
		this.button.appendChild(defaultButtonText);

		this.shadowRoot.appendChild(this.button);

		this._connected = false;

		// this.addEventListener('click', e => {
		// 	console.log("Clicked");
		// });

		// Default click action
		this._action = () => {
			alert('Leave me alone!');
		}
	}

	// Called whenever the custom element (Web Comp.) is inserted into the DOM.
	connectedCallback() {
		this._connected = true;
		if (nestedSampleVerbose) {
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

		this.repaint();
	}

	// Called whenever the custom element is removed from the DOM.
	disconnectedCallback() {
		if (nestedSampleVerbose) {
			console.log("disconnectedCallback invoked");
		}
	}

	// Called whenever an attribute is added, removed or updated.
	// Only attributes listed in the observedAttributes property are affected.
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (nestedSampleVerbose) {
			console.log("attributeChangedCallback invoked on " + attrName + " from " + oldVal + " to " + newVal);
		}
		switch (attrName) {
			case "width":
				this._width = parseInt(newVal);
				break;
			case "height":
				this._height = parseInt(newVal);
				break;
			case "value":
				this._value = newVal;
				break;
			default:
				break;
		}
	}

	// Called whenever the custom element has been moved into a new document.
	adoptedCallback() {
		if (nestedSampleVerbose) {
			console.log("adoptedCallback invoked");
		}
	}

	set width(val) {
		this.setAttribute("width", val);
	}
	set height(val) {
		this.setAttribute("height", val);
	}
	set value(val) {
		this.setAttribute("value", val);
	}
	set action(fn) {
		this._action = fn;
		this.repaint();
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
	get value() {
		return this._value;
	}

	get action() {
		return this._action;
	}

	get shadowRoot() {
		return this._shadowRoot;
	}

	repaint() {
		if (this._connected) {
			this.drawComponent();
		}
	}

	drawComponent() {
		if (this._connected) {
			if (this.width) {
				this.button.style.width = this.width + "px";
			}
			if (this.height) {
				this.button.style.height = this.height + "px";
			}
			if (this.value) {
				this.button.innerText = this.value;
			}

			this.button.onclick = this._action;
		}
	}

}
// Associate the tag and the class
window.customElements.define(NESTED_SAMPLE_TAG_NAME, NestedSample);
