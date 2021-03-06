"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            else
                this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getDistance = function (another) {
        // ..
    };
    return Point;
}());
exports.Point = Point;
