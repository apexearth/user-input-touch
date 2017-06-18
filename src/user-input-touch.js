var util         = require("util")
var touch        = require("touch-events2")
var EventEmitter = require("events").EventEmitter;

var browser = require("./browser.js")

module.exports            = touchInput
browser.window.touchInput = touchInput

function touchInput(target) {
    return new TouchInput(touch(target))
}

function TouchInput(input) {
    var that = this;
    EventEmitter.call(this, input)
    this._input = input

    this._input.on('touchstart', handleTouchEvent.bind(this, 'touchstart'))
    this._input.on('touchend', handleTouchEvent.bind(this, 'touchend'))
    this._input.on('touchmove', handleTouchEvent.bind(this, 'touchmove'))

    function handleTouchEvent(name, e) {
        that.touches        = e.touches
        that.changedTouches = e.changedTouches
    }

    this.clear = clear
    function clear() {
        that.touches        = []
        that.changedTouches = []
    }
}
util.inherits(TouchInput, EventEmitter)
