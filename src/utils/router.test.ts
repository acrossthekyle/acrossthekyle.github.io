import { getQueryItem } from './router';

describe('utils', () => {
  describe('router', () => {
    describe('getQueryItem', () => {
      it('will return a string', () => {
        expect(getQueryItem({ key: 'foo' }, 'key')).toEqual('foo');
        expect(getQueryItem({ key: ['foo'] }, 'key')).toEqual('foo');
        expect(getQueryItem({ key: ['foo', 'bar'] }, 'key')).toEqual('foobar');
        expect(getQueryItem({ foo: ['key'] }, 'key')).toEqual('');
      });
    });
  });
});
