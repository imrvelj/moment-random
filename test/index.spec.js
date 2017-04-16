import moment from 'moment';
import momentRandom from '../src/index';

describe('moment-random', () => {
    test('should be defined', () => {
        expect(momentRandom).toBeTruthy();
    });

    test('should return a moment object', () => {
        const date = momentRandom();
        expect(moment.isMoment(date)).toBeTruthy();
    });

    test('should return a moment object by calling it with Date objects', () => {
        expect(() => momentRandom(new Date('2000-01-01'), new Date('2001-01-01')))
            .toThrow(Error);
    });

    test('should return a proper moment object in interval of time', () => {
        const date = momentRandom(new Date('2001-01-01'), new Date('2000-01-01'));
        expect(date.isAfter('2000-01-01')).toBeTruthy();
        expect(date.isBefore('2001-01-01')).toBeTruthy();
    });
});
