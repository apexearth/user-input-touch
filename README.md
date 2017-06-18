# user-input-touch

![](https://travis-ci.org/apexearth/user-input-touch.svg)

Base class for creating user inputs.

## Usage

[![NPM](https://nodei.co/npm/user-input-touch.png)](https://nodei.co/npm/user-input-touch/)

    var touch = window.touchInput(document)
    
    touch.touches        // Array of last touches.
    touch.changedTouches // Array of last changed touches.
    
## Tests

- Mocha
    - Test functionality in Node.js
    - `npm test`
- User Test
    - Test functionality in browser.
    - `npm user-test`