var moment = require('moment');

var randomMoment = function() {
    var today = moment().unix();
    // Computes range
    // var range = Math.random() * (max - min) + min;
    // end = end || today;
    return moment.unix(Math.random() * today);
};

module.exports = function() {
    return new randomMoment();
};
