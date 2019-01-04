## Bits and Pieces for WebComponents

- [W3C Reference](http://w3c.github.io/webcomponents/spec/custom/)
- [DOM Elements](https://www.w3.org/TR/DOM-Level-2-HTML/html.html)
- [Shadow DOM Spec](https://w3c.github.io/webcomponents/spec/shadow/)
- [HTML imports](http://w3c.github.io/webcomponents/spec/imports/)
- [HTML templates](https://html.spec.whatwg.org/multipage/webappapis.html)
- [Tutorial](https://auth0.com/blog/web-components-how-to-craft-your-own-custom-components/)
- [Good resource](https://developers.google.com/web/fundamentals/web-components/customelements) also showing how to extend a WebComponent
- [Templates & Imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
- Portability & compatibility: [Polyfills](https://www.webcomponents.org/polyfills)

Another bunch of links:
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Templates and Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

-----------------------

I use nodeJS to run the pages:
 ```bash
 $ node server.js
```

Then load the pages in a browser, using for example [http://localhost:8080/oliv-components/index.html](http://localhost:8080/component.01/index.html).

---

The `WebComponents` standard allows the definition of custom reusable visual components, used in a web page like any standard component.

Example:
```html
<pluvio-meter id="pluviometer-01"
              title="m/m per hour"
              min-value="0"
              max-value="10"
              major-ticks="1"
              minor-ticks="0.25"
              value="0"
              width="60"
              height="220"></pluvio-meter>
```
In addition, they may be accessed from JavaScript:
```javascript
function setData() {
  let elem = document.getElementById("pluviometer-01");
  let value = document.getElementById("rain-value").value;
  elem.value = value;
}
```
This means that their properties can be dynamically modified once the component is loaded.

A `WebComponent` extends `HTMLElement`; as such all the properties of an `HTMLElement` are available on a `WebComponent`
 (such as - see above - `class`, `title`, etc). _Not_ overriding those properties is probably a good idea.

---

## Lessons learned

No animation _**in**_ the component, `clearInterval` does not clear anything.
If animation is needed, make it happen outside the component.
Works OK (~so-so) if there is only one component, it's a mess otherwise.

---

## Questions to address
- Observed Attributes. Does a "final" (remaining as-is after being loaded) attribute have to be observed?
- Extending a WebComponent?

---

### Good to go

[Oliv's Components](./oliv-components)

### WIP: Local `npm` registry
- [https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af](https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af)

Example:

- First, publish the component(s)
```
$ cd oliv-components/widgets
$ ./publish.sh
+-------------------------+
+-- P U B L I S H I N G --+
+-------------------------+
|  1. AnalogDisplay       |
|  2. AnalogWatch         |
|  3. CalendarDisplay     |
|  4. Compass             |
|  5. Direction Display   |
|  6. Jumbo Display       |
|  7. Led Panel           |
|  8. Marquee Panel       |
|  9. Rain Meter          |
| 10. 16 Points Display   |
| 11. Sky Map             |
| 12. Split Flap          |
| 13. Thermometer         |
| 14. Wind Angle          |
| 15. World Map           |
| 16. Boat Overview       |
| ...                     |
+-------------------------+
| Q to quit               |
+-------------------------+
- You choose > 7
--- npm config ---
; cli configs
 ...

👉 Widget in ledpanel
yarn install v1.9.4
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.52s.
yarn run v1.9.4
$ webpack --env dev && webpack --env build
Hash: 7f5a3ceac71cdd0cfb45
Version: webpack 4.26.1
Time: 874ms
Built at: 2018-12-05 11:23:45
           Asset      Size  Chunks             Chunk Names
    led-panel.js  17.9 KiB    main  [emitted]  main
led-panel.js.map  22.1 KiB    main  [emitted]  main
Entrypoint main = led-panel.js led-panel.js.map
[./LedPanel.js] 14.1 KiB {main} [built]
Hash: b78f9d47f241d805f010
Version: webpack 4.26.1
Time: 1412ms
Built at: 2018-12-05 11:23:48
               Asset      Size  Chunks             Chunk Names
    led-panel.min.js  7.13 KiB       0  [emitted]  main
led-panel.min.js.map  19.1 KiB       0  [emitted]  main
Entrypoint main = led-panel.min.js led-panel.min.js.map
[0] ./LedPanel.js 14.1 KiB {0} [built]
✨  Done in 4.05s.
👉 Distrib generated in ../lib/ledpanel
👉 Done with ledpanel
$
```
- Then, npm link, from the directory where the component is published
```
$ cd ../lib/ledpanel
$ [sudo] npm link
...
```
- Now you can refer to the npm link, by the directory name, from another directory you wish to use the component from. Here we refer to `ledpanel` from the `my-stuff` directory. The component appears under the `node_modules` folder...
```
$ mkdir ~/my-stuff
$ cd ~/my-stuff
$ [sudo] npm link lepdpanel
...
$ ll ./node_modules/ledpanel/*
  8622552112 40 -rw-r--r--  1 olediour  staff  18325 Dec  5 11:23 node_modules/ledpanel/led-panel.js
  8622552113 48 -rw-r--r--  1 olediour  staff  22629 Dec  5 11:23 node_modules/ledpanel/led-panel.js.map
  8622552119 16 -rw-r--r--  1 olediour  staff   7303 Dec  5 11:23 node_modules/ledpanel/led-panel.min.js
  8622552120 40 -rw-r--r--  1 olediour  staff  19578 Dec  5 11:23 node_modules/ledpanel/led-panel.min.js.map
  8622552262  8 -rw-r--r--  1 root      staff     68 Dec  5 11:18 node_modules/ledpanel/package-lock.json
  8622552456  8 -rw-r--r--  1 olediour  staff    424 Dec  5 11:26 node_modules/ledpanel/package.json
$

```

---

More to come...
