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

    it('should return a moment object by calling it with Date objects', () => {
        expect(
            () => momentRandom(new Date('2000-01-01'), new Date('2001-01-01'))

        ).to.throw(Error);
    });
});
