import moment from 'moment';

function randomMoment() {
    // Computes range
    // Math.random() * (max - min) + min;

    var today = moment().unix();
    return moment.unix(Math.random() * today);
}

module.exports = function() {
    return new randomMoment();
};
