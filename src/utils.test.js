import { image, pad } from './utils';

describe('utils', () => {
  describe('pad', () => {
    it('will pad numbers', () => {
      expect(pad(1)).toEqual('01');
      expect(pad(0)).toEqual('00');
      expect(pad(12)).toEqual('12');
      expect(pad(50, 3)).toEqual('050');
      expect(pad(1, 1)).toEqual('1');
    });
  });

  describe('image', () => {
    it('will construct an image path', () => {
      expect(image('1-2-3-4', 'foo')).toEqual('https://ik.imagekit.io/acrossthekyle/uploads/foo/1-2-3-4.jpeg');
      expect(image('1-2-3-4', 'foo', 'png')).toEqual('https://ik.imagekit.io/acrossthekyle/uploads/foo/1-2-3-4.png');
      expect(image('1-2-3-4')).toEqual('https://ik.imagekit.io/acrossthekyle/uploads/1-2-3-4.jpeg');
      expect(image('1-2-3-4', undefined, 'png')).toEqual('https://ik.imagekit.io/acrossthekyle/uploads/1-2-3-4.png');
    });
  });
});
