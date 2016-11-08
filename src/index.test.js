import {expect} from 'chai';
import moment from 'moment';
import momentRandom from './index';

describe('moment-random', () => {
    it('should be defined', () => {
        expect(momentRandom).not.to.be.an('undefined');
    });

    it('should return a moment object', () => {
        expect(moment.isMoment(momentRandom())).to.equal(true);
    });
});
