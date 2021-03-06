[<< Back](../README.md)

## Oliv's Web Components

> Note: _Those components requires **absolutely NO** external library._
> (No Knockout, Require, jQuery, etc).

> But EcmaScript6 (ES6, or higher) is required. Should not be a problem (2018 onwards).

> Some components might require some (provided) utilities like
> - `character.matrixes/characters.js`
> - `stars/constellation.js`
> - `utilities/Utilities.js`

You need to be aware of this kind of dependencies, in case you wish to use the non-WebPacked version of those components.

They do require a WebComponents-savvy browser though. Most of them are (or will shortly be...).

### Live Demos
Requires `nodejs` to be available on your system.

To see the components at work, after cloning the repo (or refreshing your branch), start the `node` server _**from the `WebComponents` directory**_, and load `index.html` in a browser:

```bash
 $> node server.js
```
Then load [http://localhost:8080/oliv-components/index.html](http://localhost:8080/oliv-components/index.html) in a WebComponents-enabled web browser.

#### Also available
After starting the `node` server as mentioned above, you can also reach
- [http://localhost:8080/oliv-components/mirror.html](http://localhost:8080/oliv-components/mirror.html), the basis for an Head-Up Display (HUD) application.
- [http://localhost:8080/oliv-components/pwm.html](http://localhost:8080/oliv-components/pwm.html), for an explanation about how Pulse Width Modulation works.

### Hosted
- See it live [here](http://raspberrypi.lediouris.net/webcomponents/index.html).

### Components list
- Pluviometer. &#9989; Done.
- Thermometer. &#9989; Done
- Jumbo Display. &#9989; Done
- Direction Display. &#9989; Done
- Analog Display. &#9989; Done
- Wind Angle. &#9989; Done
- Globe and Map (with `import` and `module`). &#9989; Done <!-- &#10140; WIP -->
- Compass Rose. &#9989; Done
- Digital Scrolling Display (like a log). 🚧 In Progress (or use the split-flap display below)
- Date (calendar) display. &#9989; Done
- Watch/Clock (analog). &#9989; Done
- Marquee. &#9989; Done
- Lep Panel. &#9989; Done
- Evolution Displays. TODO ⏰
- Generic Graphs. &#9989; Done
- Sky Map and Star Finder (along with some `REST` service(s)). &#9989; Done
- Split-flap Display. &#9989; Done
- Deviation Curve. => Use the Generic Graph, in its vertical configuration. &#9989; Done
- Sun Path Display (fed by some `REST` services). &#9989; Done <!-- &#10140; 🚧 In progress -->
- Simple Slide Show. &#9989; Done
- T900 Templates (Dieumegard Bataille). TODO ⏰
- GPS Satellites Plotter. &#9989; Done
- Knob and display. &#9989; Done
- Moon Phase and Tilt. &#9989; Done

#### <img src="./images/cone.png" alt="WIP" width="48" height="48" align="middle"> TODO
- &#x1F6A7; Replace (or duplicate) canvases with [SVG](https://www.w3.org/TR/SVG11/) s 🚧

#### Screenshots, as they appear from the Demo page
World Map in its `globe` configuration:

![World Map](./images/worldmap.png)

SkyMap in its `Star Finder` configuration:

![Star Finder](./images/starfinder.png)

SkyMap in its `Sky Map` configuration:

![Sky Map](./images/skymap.png)

#### Maybe next?
- Satellite plotter? &#10140; See the `doAfter` callback on the Globe examples.
- Tide Graph?
- Current Display?
- Generic curve(s) display. Done.

#### To build for prod
  You need `npm` or `yarn` to be installed. Some scripts will minimized the scripts, and use `webpack` to put everything need in only one file.

Follow [those instructions](./widgets/README.md).

---

##### Artifacts
- Javascript Modules (careful with Firefox 58 and below...)
    - defining the component's parameters (properties) and behavior
- Examples, in `gallery.html` and on [`CodePen`](http://codepen.io/OlivierLD/).
    - including animations examples
- CSS rules and classes (in their own stylesheet, `web-components.css`)

---

#### TODO
- JSDoc

#### CodePen (might not be 100% in sync... But close'ish)
The point of truth remains this repo.

Components above, live at [CodePen](http://codepen.io/OlivierLD/), when released.

- [Jumbo Display](https://codepen.io/OlivierLD/pen/VQyVjy).
- [Pluviometer](https://codepen.io/OlivierLD/pen/oEPKgg).
- [Thermometer](https://codepen.io/OlivierLD/pen/KQQEEp).
- [Direction](https://codepen.io/OlivierLD/pen/bLjwdj).
- [Analog Display](https://codepen.io/OlivierLD/pen/QQBYEw).
- [Compass Rose](https://codepen.io/OlivierLD/pen/aqaLQq).
- [World Map](https://codepen.io/OlivierLD/pen/xYQbmb).
- [Calendar Display](https://codepen.io/OlivierLD/pen/EpOJEW).
- [SkyMap/StarFinder](https://codepen.io/OlivierLD/project/full/APNqRk).
- [Split-Flap Display](https://codepen.io/OlivierLD/pen/LJLbeQ).
- [Boat Overview](https://codepen.io/OlivierLD/pen/bQmZrm).
- [Sun Path](https://codepen.io/OlivierLD/pen/zyLoQj).

#### HTML Templates &amp; Imports

> Warning: This feature is now deprecated...

Along the same lines as Web Components, for re-usability, modularity, etc.
See the examples in this module.

#### Firefox
If you are having trouble running the WebComponents in Firefox 58, see
[this document](https://www.designedbyaturtle.co.uk/2015/how-to-enable-web-components-in-firefox-shadow-dom/).

> _Note_: Since version **63.0**, WebComponents are supported by Firefox.

#### Transpilation
Use `babel`, as explained [here](https://babeljs.io/docs/usage/cli/).

Also see [this document](widgets/README.md), in the same project.

There is also a [transpiler on-line](http://babeljs.io/en/repl.html), that works correctly.

---
&copy; 2018, and after, by Oliv Soft.

