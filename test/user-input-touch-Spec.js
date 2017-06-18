var expect     = require("expect")
var touchInput = require("../src/user-input-touch.js")

describe("user-input-touch.js", function () {

    it("has default members", function () {
        var input = touchInput()
        expect(input._input).toExist()
    })

    it("reacts properly to touch events", function () {
        var touch          = touchInput()
        var innerInput     = touch._input
        var touches        = []
        var changedTouches = []
        innerInput.emit("touchmove", {touches, changedTouches})
        expect(touch.touches).toEqual(touches)
        expect(touch.changedTouches).toEqual(changedTouches)

        touches        = []
        changedTouches = []
        innerInput.emit("touchstart", {touches, changedTouches})
        expect(touch.touches).toEqual(touches)
        expect(touch.changedTouches).toEqual(changedTouches)

        touches        = []
        changedTouches = []
        innerInput.emit("touchend", {touches, changedTouches})
        expect(touch.touches).toEqual(touches)
        expect(touch.changedTouches).toEqual(changedTouches)
    })

    it("can clear all values back to zero", function () {
        var touch          = touchInput()
        var innerInput     = touch._input
        var touches        = [1]
        var changedTouches = [2]
        innerInput.emit("touchmove", {touches, changedTouches})
        expect(touch.touches).toEqual(touches)
        expect(touch.changedTouches).toEqual(changedTouches)
        expect(touch.touches.length).toEqual(1)
        expect(touch.changedTouches.length).toEqual(1)
        touch.clear()
        expect(touch.touches).toNotEqual(touches)
        expect(touch.changedTouches).toNotEqual(changedTouches)
        expect(touch.touches.length).toEqual(0)
        expect(touch.changedTouches.length).toEqual(0)
    })
})
