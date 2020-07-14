import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
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

CSS Concepts:
Cascading | Inheritance | Specifity
Selectors | Properties
Box-model | Margin Collapse | Normal Document Flow | Float
Fixed Layout px | Flexible Layout % | em Layout | Adaptive Layout @media
Responsive layout, visibility, graphics, and font size
Retina display
Sprites
Multi-background
Compound effects: bevel
Zoom

CSS Frameworks

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

`}
</pre>
    );
  }
}