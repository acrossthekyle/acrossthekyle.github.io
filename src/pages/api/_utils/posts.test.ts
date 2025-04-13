import posts from '../_database/posts';

import {
  filterPostsByQuery,
  getUniquePostTitles,
  getUniquePostLocations,
} from './posts';

describe('_utils/posts', () => {
  let uniqueTitles;
  let uniqueLocations;

  beforeAll(() => {
    uniqueTitles = getUniquePostTitles(posts);
    uniqueLocations = getUniquePostLocations(posts);
  });

  it('will get all unique titles for filtering', () => {
    expect(uniqueTitles.length).toBeLessThanOrEqual(posts.length);
    expect(uniqueTitles[0]).toEqual(
      'returning to the alpes and the tour du mont blanc',
    );
  });

  it('will get all unique locations for filtering', () => {
    expect(uniqueLocations.length).toBeLessThanOrEqual(posts.length);
    expect(uniqueLocations[0]).toEqual('alpes, europe');
  });

  it('will return an empty array if the query string is empty', () => {
    expect(filterPostsByQuery(posts, '')).toHaveLength(0);
  });

  it('will return posts that match a year', () => {
    const result = filterPostsByQuery(posts, '2018');

    expect(result).toHaveLength(2);
    expect(result[0].subTitle).toContain('2018');
    expect(result[1].subTitle).toContain('2018');
  });

  it('will not return posts that do not match a year', () => {
    const result = filterPostsByQuery(posts, '2000');

    expect(result).toHaveLength(0);
  });

  it('will return posts that match a title', () => {
    const result = filterPostsByQuery(posts, 'camino');

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toContain('camino');
  });

  it('will return posts that match a location', () => {
    const result = filterPostsByQuery(posts, 'cairo');

    expect(result).toHaveLength(1);
  });

  it('will return posts that match a location and title', () => {
    const result = filterPostsByQuery(posts, 'corsica');

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toContain('corsica');
  });

  it('will return posts that match a query with multiple words', () => {
    const result = filterPostsByQuery(posts, 'tour cairo');

    expect(result).toHaveLength(4);
    expect(result[0].title.toLowerCase()).toContain('tour');
    expect(result[1].title.toLowerCase()).toContain('tour');
    expect(result[2].title.toLowerCase()).toContain('tour');
    expect(result[3].title.toLowerCase()).toContain('egypt');
  });

  it('will return posts that match a query with a year and multiple words', () => {
    const result = filterPostsByQuery(posts, 'tour 2023 egypt');

    expect(result).toHaveLength(5);
    expect(result[0].title.toLowerCase()).toContain(
      'returning to the alpes and the tour du mont blanc',
    );
    expect(result[1].title.toLowerCase()).toContain(
      'stepping up my thru-hiking game with the tour du mont blanc',
    );
    expect(result[2].title.toLowerCase()).toContain(
      'playing tourist in geneva, switzerland',
    );
    expect(result[3].title.toLowerCase()).toContain(
      'conquering the great hike of corsica, france',
    );
    expect(result[4].title.toLowerCase()).toContain(
      'welcoming the new year as we explored the land of egypt',
    );
  });

  it('will return no posts due to no matches', () => {
    const result = filterPostsByQuery(posts, '1995 foo bar');

    expect(result).toHaveLength(0);
  });
});
