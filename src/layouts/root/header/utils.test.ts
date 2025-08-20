import { getRoutePath } from './utils';

describe('utils', () => {
  describe('getRoutePath', () => {
    test.each([
      ['/', true, '/', '/', '/', ''],
      ['/', false, '/travels', '/travels', '/travels', ''],
      ['/', false, '/contact', '/contact', '/contact', ''],
      ['/', false, '/about', '/about', '/about', ''],
      ['/', false, '/travels', '/travels', '/travels', 'filter=thru-hikes'],
      ['/travels?filter=thru-hikes', false, '/travels', '/travels', '/travels/tour-du-mont-blanc', 'filter=thru-hikes'],
      ['/about', false, '/about', '/about', '/travels/tour-du-mont-blanc', 'filter=thru-hikes'],
      ['/contact', false, '/contact', '/contact', '/travels/tour-du-mont-blanc', 'filter=thru-hikes'],
    ])('will return %s when isOnRoot is %s, base is %s, route is %s, current is %s, and parameters is %s', (
      expected,
      isOnRoot,
      base,
      route,
      current,
      parameters,
    ) => {
      expect(getRoutePath(isOnRoot, base, route, current, parameters)).toBe(
        expected,
      );
    });
  });
});
