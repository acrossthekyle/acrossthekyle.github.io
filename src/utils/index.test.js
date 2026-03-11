import { convertFeetToMeters } from './index';

describe('utils', () => {
  describe('convertFeetToMeters', () => {
    it('will convert', () => {
      expect(convertFeetToMeters(125)).toEqual(38);
      expect(convertFeetToMeters(525)).toEqual(160);
      expect(convertFeetToMeters(1024)).toEqual(312);
    });
  });
});
