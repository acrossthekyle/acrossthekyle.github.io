import { getPostIdAndStageFromUriSegment } from './http';

describe('utils', () => {
  it('will only get the post id', () => {
    const result = getPostIdAndStageFromUriSegment([
      '.com',
      'some-post-name-uri',
    ]);

    expect(result.id).toEqual('some-post-name-uri');
    expect(result.stageIndex).toEqual(-1);
  });

  it('will get the post id and the stage index', () => {
    const result = getPostIdAndStageFromUriSegment([
      '.com',
      'some-post-name-uri/1',
    ]);

    expect(result.id).toEqual('some-post-name-uri');
    expect(result.stageIndex).toEqual(1);
  });
});
