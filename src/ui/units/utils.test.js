import { formatNumber } from './utils';

describe('utils', () => {
  describe('formatNumber', () => {
    it('will format numbers', () => {
      expect(formatNumber(1234)).toEqual('1,234');
      expect(formatNumber(1234, true)).toEqual('1.2K');
    });
  });
});
