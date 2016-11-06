// Math.random() * (max - min) + min;

import moment from 'moment';

const randomMoment = () => {
    const today = moment().unix();
    return moment.unix(Math.random() * today);
};

module.exports = randomMoment;
