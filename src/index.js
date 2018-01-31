const moment = require('moment');

/**
 * Generates a random moment.js object
 * 
 * @param {any} end - END date [Anything a moment constructor accepts]
 * @param {any} start - START date [Anything a moment constructor accepts]
 * @returns 
 */
function momentRandom(end = moment(), start) {
  const endTime = +moment(end);
  const randomNumber = (to, from = 0) =>
    Math.floor(Math.random() * (to - from) + from);

  if (start) {
    const startTime = +moment(start);
    if (startTime > endTime) {
      throw new Error('End date is before start date!');
    }
    return moment(randomNumber(endTime, startTime));
  }
  return moment(randomNumber(endTime));
}

module.exports = momentRandom;