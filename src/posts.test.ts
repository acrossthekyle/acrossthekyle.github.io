import posts from './posts';

describe('posts', () => {
  it('will get posts as an array', () => {
    expect(Array.isArray(posts.getArray())).toBeTruthy();
  });

  it('will get the total number of posts', () => {
    expect(posts.getTotal()).toEqual(posts.getArray().length);
  });

  it('will get a post by an identifier', () => {
    const result = posts.getById('quandary-peak');

    expect(result).not.toBeNull();
    expect(result.uri).toEqual('/posts/quandary-peak');
  });

  it('will get null from an invalid identifier', () => {
    const result = posts.getById('foo-bar-baz');

    expect(result).toBeNull();
  });

  it('will get a post, or null, by an index', () => {
    expect(posts.getByIndex(4)).not.toBeNull();
    expect(posts.getByIndex(99999)).toBeNull();
  });

  it('will get a stage for a post', () => {
    const result = posts.getStage('walking-the-camino-de-santiago', 5);

    expect(result).not.toBeUndefined();
    expect(result.index).toEqual(4);
    expect(result.title).toEqual('Puente la Reina to Estella');
  });

  it('will get an undefined stage for a post', () => {
    expect(posts.getStage('walking-the-camino-de-santiago', 0)).toBeUndefined();
    expect(posts.getStage('walking-the-camino-de-testing', 5)).toBeUndefined();
  });

  it('will get the next stage for a post', () => {
    const result = posts.getStageNext(
      posts.getById('walking-the-camino-de-santiago'),
      posts.getStage('walking-the-camino-de-santiago', 5),
    );

    expect(result).not.toBeUndefined();
    expect(result.title).toEqual('Estella to Sansol');
    expect(result.uri).toEqual('/posts/walking-the-camino-de-santiago/06');
  });

  it('will get an undefined next stage for an invalid post and stage', () => {
    const result = posts.getStageNext(
      posts.getById('walking-the-camino-de-testing'),
      posts.getStage('walking-the-camino-de-testing', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get an undefined next stage for an invalid post and valid stage', () => {
    const result = posts.getStageNext(
      posts.getById('walking-the-camino-de-testing'),
      posts.getStage('walking-the-camino-de-santiago', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get an undefined next stage for a valid post and invalid stage', () => {
    const result = posts.getStageNext(
      posts.getById('walking-the-camino-de-santiago'),
      posts.getStage('walking-the-camino-de-testing', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get the previous stage for a post', () => {
    const result = posts.getStagePrevious(
      posts.getById('walking-the-camino-de-santiago'),
      posts.getStage('walking-the-camino-de-santiago', 5),
    );

    expect(result).not.toBeUndefined();
    expect(result.title).toEqual('Pamplona to Puente la Reina');
    expect(result.uri).toEqual('/posts/walking-the-camino-de-santiago/04');
  });

  it('will get an undefined previous stage for an invalid post and stage', () => {
    const result = posts.getStagePrevious(
      posts.getById('walking-the-camino-de-testing'),
      posts.getStage('walking-the-camino-de-testing', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get an undefined previous stage for an invalid post and valid stage', () => {
    const result = posts.getStagePrevious(
      posts.getById('walking-the-camino-de-testing'),
      posts.getStage('walking-the-camino-de-santiago', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get an undefined previous stage for a valid post and invalid stage', () => {
    const result = posts.getStagePrevious(
      posts.getById('walking-the-camino-de-santiago'),
      posts.getStage('walking-the-camino-de-testing', 5),
    );

    expect(result).toBeUndefined();
  });

  it('will get a newer post', () => {
    const result = posts.getNewer(
      posts.getById('walking-the-camino-de-santiago'),
    );

    expect(result).not.toBeUndefined();
    expect(result.uri).toEqual('/posts/the-tour-du-mont-blanc');
  });

  it('will get an undefined newer post', () => {
    const result = posts.getNewer(
      posts.getById('walking-the-camino-de-testing'),
    );

    expect(result).toBeUndefined();
  });

  it('will get an older post', () => {
    const result = posts.getOlder(
      posts.getById('walking-the-camino-de-santiago'),
    );

    expect(result).not.toBeUndefined();
    expect(result.uri).toEqual('/posts/discovering-backpacking-in-chile');
  });

  it('will get an undefined older post', () => {
    const result = posts.getOlder(
      posts.getById('walking-the-camino-de-testing'),
    );

    expect(result).toBeUndefined();
  });

  it('will get all the tags', () => {
    const result = posts.getTags();

    expect(result.length).toBeGreaterThan(0);
  });

  it('will get the three most recent posts', () => {
    const result = posts.getRecents();
    const allPosts = posts.getArray();

    expect(result.length).toEqual(3);
    expect(result[0].uri).toEqual(allPosts[0].uri);
    expect(result[1].uri).toEqual(allPosts[1].uri);
    expect(result[2].uri).toEqual(allPosts[2].uri);
  });
});
