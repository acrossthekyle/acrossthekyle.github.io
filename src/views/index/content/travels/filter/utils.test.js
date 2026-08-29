import { uppercaseFirst } from './utils';

describe('utils', () => {
  describe('uppercaseFirst', () => {
    it('will uppercase first letter in string', () => {
      expect(uppercaseFirst('foo')).toEqual('Foo');
      expect(uppercaseFirst('Foo')).toEqual('Foo');
      expect(uppercaseFirst('FOO')).toEqual('FOO');
    });
  });
});
