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
`}</pre>
      </div>
    );
  }
}