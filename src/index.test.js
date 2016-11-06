import {expect} from 'chai';
import momentRandom from './index';

describe('moment-random', () => {
    it('should be defined', () => {
        expect(momentRandom).not.to.be.an('undefined');
    });
});
