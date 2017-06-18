# user-input-touch

![](https://travis-ci.org/apexearth/user-input-touch.svg)

Base class for creating user inputs.

## Usage

[![NPM](https://nodei.co/npm/user-input-touch.png)](https://nodei.co/npm/user-input-touch/)

### Examples

    var touch = window.touchInput(document)

When the user presses the left mouse button, `mouse` would contain the following.

    {
        "x": 0,
        "y": 0,
        "mouse0": 1
    }

When the user releases the left mouse button, and then presses the right mouse button, `mouse` would contain the following.

    {
        "x": 0,
        "y": 0,
        "mouse0": 0,
        "mouse2": 1
    }

## Tests

- Mocha
    - Test functionality in Node.js
    - `npm test`
- User Test
    - Test functionality in browser.
    - `npm user-test`