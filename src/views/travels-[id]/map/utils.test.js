import { parseCoordinates } from './utils';

describe('utils', () => {
  describe('parseCoordinates', () => {
    it('will parse string lat/long coordinates', () => {
      expect(parseCoordinates('46.699222° N, 12.085207° E')).toEqual([46.699222, 12.085207]);
      expect(parseCoordinates('46.699222° S, 12.085207° E')).toEqual([-46.699222, 12.085207]);
      expect(parseCoordinates('46.699222° N, 12.085207° W')).toEqual([46.699222, -12.085207]);
    });
  });
});
