'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a new, random moment object
 * @param  {object} options
 * @return {object} returnObject - momentObject
 */
function randomMoment() {
    var end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();
    var start = arguments[1];

    var endMoment = (0, _moment2.default)(end);
    var randomNumber = function randomNumber(to) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return Math.floor(Math.random() * (to - from) + from);
    };

    if (start) {
        var startMoment = (0, _moment2.default)(start);
        if (startMoment.unix() > endMoment.unix()) {
            throw new Error('End date is before start date!');
        }
        return _moment2.default.unix(randomNumber(endMoment.unix(), startMoment.unix()));
    } else {
        return _moment2.default.unix(randomNumber(endMoment.unix()));
    }
}

module.exports = randomMoment;