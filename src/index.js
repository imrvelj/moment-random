const moment = require('moment');

/**
 * Generates a random moment.js object
 * 
 * @param {any} end - END date [Anything a moment constructor accepts]
 * @param {any} start - START date [Anything a moment constructor accepts]
 * @returns 
 */
function momentRandom(end = moment(), start) {
  const endMoment = moment(end);
  const randomNumber = (to, from = 0) =>
    Math.floor(Math.random() * (to - from) + from);

  if (start) {
    const startMoment = moment(start);
    if (startMoment.unix() > endMoment.unix()) {
      throw new Error('End date is before start date!');
    }
    return moment.unix(randomNumber(endMoment.unix(), startMoment.unix()));
  } else {
    return moment.unix(randomNumber(endMoment.unix()));
  }
}

module.exports = momentRandom;