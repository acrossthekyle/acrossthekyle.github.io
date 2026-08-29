import { title } from './utils';

describe('utils', () => {
  describe('title', () => {
    it('will split strings', () => {
      expect(title('something')).toEqual('something');
      expect(title('something to wear')).toEqual(['something', 'wear']);
    });
  });
});
