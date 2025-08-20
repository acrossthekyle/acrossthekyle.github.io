import { getBreadcrumbs, getRoutePath } from './utils';

describe('utils', () => {
  describe('getBreadcrumbs', () => {
    it('will return root path if on parent route', () => {
      const result = getBreadcrumbs('', '', true);

      expect(result).toHaveLength(1);
      expect(result[0].path).toEqual('/');
      expect(result[0].name).toEqual('Menu');
    });

    it('will return root path and active path if not on parent route', () => {
      const result = getBreadcrumbs('/travels', '', false);

      expect(result).toHaveLength(2);
      expect(result[0].name).toEqual('Menu');
      expect(result[0].path).toEqual('/');
      expect(result[1].name).toEqual('Travels');
      expect(result[1].path).toEqual('/travels');
    });

    it('will return root path and empty path if it is unknown route', () => {
      const result = getBreadcrumbs('/unknown', '', false);

      expect(result).toHaveLength(2);
      expect(result[0].name).toEqual('Menu');
      expect(result[0].path).toEqual('/');
      expect(result[1].name).toEqual('');
      expect(result[1].path).toEqual('/');
    });

    it('will return root path and active path with parameters', () => {
      const result = getBreadcrumbs('/travels', 'filter=thru-hikes', false);

      expect(result).toHaveLength(2);
      expect(result[0].name).toEqual('Menu');
      expect(result[0].path).toEqual('/');
      expect(result[1].name).toEqual('Travels');
      expect(result[1].path).toEqual('/travels?filter=thru-hikes');
    });
  });

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
