import { decorateLink } from './utils';

describe('utils', () => {
  describe('decorateLink', () => {
    it('will return filters appended to the path', () => {
      expect(decorateLink('/', null)).toEqual('/');
      expect(decorateLink('/', '')).toEqual('/');
      expect(decorateLink('/', 'filter=thru-hike')).toEqual('/?filter=thru-hike');
    });
  });
});
