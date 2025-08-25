import { getDate } from './utils';

describe('utils', () => {
  describe('getDate', () => {
    it('will return only the years joined by an ndash', () => {
      expect(getDate({ date: null, years: [1, 2] })).toEqual('1 - 2');
    });

    it('will return month day and year', () => {
      expect(getDate({
        date: '3 1 2',
        years: [2],
      })).toEqual('3 1 2');
    });
  });
});
