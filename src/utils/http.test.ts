import { getPostParameters } from './http';

describe('utils', () => {
  describe('http', () => {
    describe('getPostParameters', () => {
      it('will get the post parameters', () => {
        expect(getPostParameters('.com/posts/some-post')).toEqual({
          id: 'some-post',
          day: -1,
        });
        expect(getPostParameters('.com/posts/some-post/01')).toEqual({
          id: 'some-post',
          day: 1,
        });
        expect(getPostParameters('.com/posts/some-post/14')).toEqual({
          id: 'some-post',
          day: 14,
        });
        expect(getPostParameters('.com/posts/some-post#timeline')).toEqual({
          id: 'some-post',
          day: -1,
        });
      });
    });
  });
});
