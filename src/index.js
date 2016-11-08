import moment from 'moment';

/**
 * Generates a new, random moment object
 * @param  {object} options
 * @return {object} returnObject - momentObject
 */
function randomMoment(end, start) {
    const endMoment = moment(end);
    const randomNumber = (to, from = 0) => Math.floor(Math.random() * (to - from) + from);

    if(start) {
        const startMoment = moment(start);
        return moment.unix(randomNumber(endMoment.unix(), startMoment.unix()));
    } else {
        return moment.unix(randomNumber(endMoment.unix()));
    }
}

module.exports = randomMoment;
