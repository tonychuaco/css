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

Styleguide:
Naming convention: descriptive & functional .pure-grid-g
Whitespacing
SMACSS

Responsive layout, visibility, graphics, and font size
Retina display
Sprites
Multi-background
Compound effects: bevel
Zoom

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

/* 
 * Box-model
 * Margin collapse (gutter)
 * em-layout
 * Normal doc flow vs Float
 * display: inline | block | list-item | inline-block |
 * visibility: hidden
 *
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