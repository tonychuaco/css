import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
<pre>{`
Rational CSS Structure
1. Normalize/reset
2. Global rules (global variables, elements, defaults, etc.)
3. General rules (layouts, areas, reusable components, or component parts)
4. Component rules (extends general rules, styles individual components)
5. Custom rules (unusual things, one-offs, etc.)
6. Other things (browser hacks, temporary code, etc.)

Document Flow Modularize

Rational Property Order
1. Positioning (position, top, left, etc.)
2. Box Model (display, width, margin, flex, etc)
3. Type (font-family, weight, size, color, columns, etc.)
4. Visual (list, border, background, transforms, etc.)
5. Animation (transition, animation, etc.)
6. Other (clip, pointer events, SVG features, etc.)

Practical Approach to CSS Refactoring:
1. Debug and remove errors
2. Remove bad practices/update to new best-practices
3. Audit everything
4. Quarantine unused code
5. Restructure based on rational rule order
6. Modularize
7. Testing

npm init //create package.json
"name"
"version"
"description"
"main": builds/development/index.html
"scripts"
"author"
"license"

npm install stylelint --save-dev //install stylelint as dependency

npm install stylelint-config-recommended --save-dev //install stylelint config as dependency

.stylelintrc //create file in directory
{
  "extends": "stylelint-config-recommended"
}

stylelint VS Code extension by Shinnosuke Wa...

VS Code Preferences (Ctrl + ,) > Workspace Settings
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}

Reload extension

/* VS Code Default Settings*/
VS Code > Tab Indent size 4 > Indent using Spaces
VS Code > Spaces 2 > Convert Indent to spaces

npm install prettier --save-dev //install prettier as dependency

npm install prettier-stylelint --save-dev //install prettier-stylelint as dependency

Update .stylelintrc
{
  "extends": [
    "stylelint-config-standard",
    "./node_modules/prettier-stylelint/config.js"
  ]
}

prettier VS Code extension by Esben Petersen
VS Code Preference > Workspace Settings
Update Workspace Settings:
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "prettier.stylelintIntegration": true,
  "[css]": {
    "editor.formatOnSave": true
  }
}

Reload extension

npm install stylelint-config-rational-order --save-dev

Update .stylelintrc
{
  "extends": [
    "stylelint-config-standard",
    "./node_modules/prettier-stylelint/config.js",
    "stylelint-config-rational-order"
  ]
}

/* Other */
Ctrl + Shift + L //multi-select lines

Ignore Warnings using comment block:
/* stylelint-disable */
  // your css code
/* stylelint-enable */

/* Google Font Best Practice */
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link> //google fonts

/*Audit unused css with Chrome */
Chrome Dev Tool > Coverage

/*Quarantine unused css to separate unused.css*/

/*Modularize CSS to separate css files*/

/* Other Advanced Tools for refactoring*/
Gemini
Wraith

/* Automation with Gulp */
npm install gulp-stylelint --save-dev //install gulp-stylelint as dependency

=================

CSS Grid | CSS Flex | Retina | SVG | CSS Animation | CSS Shapes
CSS Concepts: Cascading | Inheritance | Specifity
Syntax: Selectors | Properties

# Selectors
Elements | .class | #id | body#id | .class1.class2 | section .example p a
.group1, .group2 | a:visited | .parent > .child | .nav + .nav | h1 ~ p /*select a range*/
[type]
[type="search"]
[attribute^="string"] /*select attribute with "string" prefix- */
[attribute$="string"] /*select attribute with "string" suffix- */
p:first-child | p:last-child
p:nth-child( parameter ), where parameter is odd | even | <integer> | an+b where a && b = <integer>
p:nth-of-type()
p:before {
  content: "\"";
}
p:after {
  content:"\201c";
}

Styleguide:
Naming convention: descriptive & functional .pure-grid-g
Whitespacing
SMACSS

# border box fix
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

# Base
 * normalize.css

/* 
 * Box-model
 * Margin collapse (gutter)
 * em-layout
 * Normal doc flow vs Float
 * display: inline | block | list-item | inline-block |
 * visibility: hidden
 *
 * screen width
 * 640px
 * 1024px
 * 1280px
 *
 * Fixed-layout: px
 * Flex-layout: %
 * min-width: px
 * max-width: px
 * Adaptive: @media
 * Responsive:
 * CSS Framework
 * CSS Flexbox
 * .CSSGrid { display: grid; }
 */

# LAYOUT

/* CSS GRID */
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 300px 175px;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  grid-gap: 10px;
}

/* CSS FLEX */
.flex-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}

/* FLOAT */

float: LEFT | RIGHT | inherit | none
clear: LEFT | RIGHT | BOTH | inherit | none
overflow: visible | HIDDEN | scroll | auto | inherit

/* clearing tech#1 */
br.clearLeft {
  clear: both;
}

/* clearing tech#2 clearfix */

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}

<!--[if lt IE 8]>
<style>
.clearfix {
  zoom:1;
}
</style>
<![endif]-->

/* clearfix #2 */

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

/* -- MENU --
 *
 */


/* -- MODULE --
 *
 */

/* Horizontal Menu, Images, or P */
.horizontalModule {
  display: inline;
}

/* Stacking Modules */
.stackingModule {
  display: block;
}

/* Repeating Regions */

.section {
  width: 200px
  margin-right: 10px;
  float: left;
}

.section + .section {
  margin-right: 10px;
}

/* Flex images */

.banner1 {
  width: 75%;
  max-width: 100%;
}

.banner2 {
  height: 500px;
}

/* text wrap */

.textWrap {
  margin: 0 1em 1em 0;
  float: left;
}

.clearBoth {
  clear: both;
}

.noWrap {
  margin: 1em auto;
  display: block;
  float: none;
}

/* dropcaps */
.dropcap p:first-of-type:first-letter {
  margin: 0 5px 0 0;
  float: left;
  font-family: serif;
  font-size: 4em;
  line-height: .7;
}

/* Complex Example */
.container {
  overflow: hidden;
}

.image {
  margin-right: 1em;
  float: left;
}

.moreInfo {
  margin: 0;
  margin-right; 1em;
  padding: 0 5px;
  float: right;
}

.price {
  margin: 0;
  margin-top: -.3em;
  float: right;
}

/* Height tech#1 */

article {
  background: rgb(125, 125, 125);
  background: -moz-linear-gradient(left, rgb(237, 228, 214) 0%, rgb(237, 228, 214)62%, rgb(255, 255, 255)62%, rgb(255, 255, 255)65%, rgb(173, 169, 130)65%, rgb(173, 169, 130)100%);
  background: -webkit-linear-gradient(left, rgb(237, 228, 214) 0%, rgb(237, 228, 214)62%, rgb(255, 255, 255)62%, rgb(255, 255, 255)65%, rgb(173, 169, 130)65%, rgb(173, 169, 130)100%);
  background: linear-gradient(left, rgb(237, 228, 214) 0%, rgb(237, 228, 214)62%, rgb(255, 255, 255)62%, rgb(255, 255, 255)65%, rgb(173, 169, 130)65%, rgb(173, 169, 130)100%);
}

/* Height tech#2 */
.column1, .column2, .column3 {
  padding-bottom: 1000em;
  margin-bottom: -1000em;
}

.column3 {
  overflow: hidden;
}

/* -- Positioning --
 *
 */

position: static | relative | absolute | fixed | inherit
top:
right:
bottom:
left:
z-index: auto | <integer> | inherit

/* Absolute Positioning - Scroll-over Effect */

.origin {
  position: relative;
}

.column1 {
  position: absolute;
  top: 10px;
  bottom: 10px;
}

/* Fixed Positioning */

.widget {
  position: fixed;
  top: 10px;
  bottom: 10px;
  z-index: 1;
}

/* Clip */
clip: <shape> | auto | inherit
<shape> rect( top left bottom right)

.menu {
  clip: rect(2px 100px 100px 2px);
}

/* -- State --
 *
 */

.none {
  visibility: hidden;
}

/* CSS Transition */

transition-timing-function: ease | ease-in

.module {
  transition: color 1s linear 0.5s;
  transition-property: color;
  traansition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 0.5s;
}

/* Keyframes */
@keyframes bounce {
  0% {
    top: 0px;
  }
  50% {
    top: 250px;
  }
  100% {
    top: 0px;
  }
}

.ball {
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-iteration-count: infinite;
}

# Theme

/* Typography
 * rem
 * vw, vh, v-min, v-max
 */


/* Color */

/* Retina Background */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  header {
    background: url(image@2x.jpg);  
  }
}

/* CSS Shapes */
circle()
ellipses()
polygon( x-axis y-axis, x-axis y-axis, x-axis y-axis )
inset()

/* -- MISC --
 * Border
 * CSS Columns (NEW)
 * Effects (NEW)
 * Background
 * Transparency
 * Sprites
 */

/* Multi-background */
.module {
  background: url(image1.jpg) repeat-x left bottom, url(image2.jpg) no-repeat -300px 0;
}

/* Gradient */
.module {
  background: linear-gradient(top, rgba(153,210,240,.8)0%, rgba(153,210,240,0)60%);
}

/* Transparency */
<hsla()>
opacity
filter

/* Effects */
text-shadow
box-shadow

/* Bevel effect */

.module:after {
  content:"";
  position: absolute;
  z-index: -1;
  left: 10px;
  top: 10px;
  bottom: 10px;
  right: 10px;
  background: grey;
  border-top: 1px solid silver;
  border-left: 1px solid silver;
  border-bottom: 1px solid gold;
  border-right: 1px solid gold;
}

/* Sprites */
.menu {
  background: url(icons.png)
}

.menu1 {
  background-position: 5px 7px;
}

.menu2 {
  background-position: 5px -93px;
}

.menu3 {
  background-position: 5px 193px;
}

/* -- Breakpoints -- 
 * Mobile, Tablet, Desktop:
 * *Layout
 * *Images
 * *Menus
 * .menu { display: none; } no-repeat;
 * Typography
 */

@media only screen and (min-width: 600px) and (max-width: 920px) {
}

@media only screen and (min-width: 600px) and (max-width: 599px) {
}

<meta name="viewport" content="width=device-width, initial-scale=1.0">


/* -- RESPONSIVE LAYOUT -- */
Restrict zoom:
user-scaleable
minimum-scale
maximum-scale

/* Total box model = width & inherit */

html {
/*box-sizing: content-box;*/ /*browser default */
  box-sizing: border-box;
{

*, *:before, *:after {
  box-sizing: inherit;
}

/* Responsive img width */
img {
  max-width: 100%;
}

/*common display values */
display: inline;
display: block;
display: inline-block;
display: flex;
display: grid;

/* Off-set Overlapping */
position: static;
position: relative; /*think Illustrator effect*/
position: absolute; /*removes from doc flow*/
position: fixed;
position: sticky;

/* text wrap */
float: left;
clear: left;

### UNITS
px | % | vw | vh | vmin | vmax | fr

/* Grid */
Grid Container
Grid Line
Grid Track
Grid Cell
Grid Area

.container {
  display: grid;
  grid-template-columns: 200px 100px; /*other values: auto; repeat(2, 70px 1fr); */
  grid-template-rows: 200px 50px 100px;
  grid-gap: 20px 10px; /*gutter*/
/*grid-row-gap:*/
/*grid-column-gap:*/
}

`}</pre>
<div>
<h2>Pages &amp; Navigation</h2>
<ul>
	<li>Pages</li>
		<ul>
			<li>Single Page</li>
			<li>Multi-page Template</li>
			<li><a href="https://api.jquerymobile.com/dialog/">Dialog Widget (deprecated)</a></li>
		</ul>
	<li>Navigation</li>
	<li>Loader</li>
	<li>Transitions</li>
</ul>
</div>
<div>
<h2>CSS Framework</h2>
<ul>
	<li>Theming</li>
	<li>Buttons</li>
	<li>Icons</li>
	<li>Grids</li>
	<li>Body and Bar Classes</li>
</ul>
</div>
<div>
<h2>Widgets</h2>
<ul>
	<li>Toolbar, Navbar</li>
	<li>Tabs, Panel, Popup</li>
	<li>Listview</li>
	<li>Collapsible, Collapsible Set</li>
	<li>Table Reflow, Table Column Toggle</li>
	<li>Filterable</li>
</ul>
</div>
<div>
<h2>Form Widgets</h2>
<ul>
	<li>Checkboxes, Radio Buttons</li>
	<li>Selectmenu, Custom Menu</li>
	<li>Flipswitch</li>
	<li>Slider, Rangeslider</li>
	<li>Input Button</li>
	<li>Controlgroup</li>
</ul>
</div>
<h2>HTML</h2>
<div>Form</div>
<div>Semantics</div>
<div>
<h3>Graceful Degradation</h3>
<ul>
	<li>HTML5Shiv</li>
</ul>
</div>
<h2>CSS</h2>
<div>Grid Layout</div>
<div>
<h3>Responsive Design</h3>
<ul>
  <li>Viewport</li>
  <li>@media</li>
  <li>Grid</li>
  <li>Images</li>
  <li>Video</li>
  <li>Font</li>
</ul>
</div>
<h2>Bootstrap</h2>
<div>Container</div>
<div>Grid</div>
<div>Color and Opacity</div>
<div>Table</div>
<div>Jumbotron</div>
<h2>Sass</h2>
<h6>Tools for CSS</h6>
<ul>
	<li>Sass Variable</li>
	<li>Sass Nesting</li>
	<li>@import</li>
	<li>Sass Partials</li>
	<li>@mixin</li>
	<li>@include</li>
	<li>@extend</li>
</ul>
  <h6>Sass Functions</h6>
  <ul>
    <li>String</li>
  </ul>

      </div>
    );
  }
}