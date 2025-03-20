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
    expect(
      filterPostsByQuery('', posts, uniqueTitles, uniqueLocations),
    ).toHaveLength(0);
  });

  it('will return posts that match a year', () => {
    const result = filterPostsByQuery(
      '2018',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(2);
    expect(result[0].date).toContain('2018');
    expect(result[1].date).toContain('2018');
  });

  it('will not return posts that do not match a year', () => {
    const result = filterPostsByQuery(
      '2000',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(0);
  });

  it('will return posts that match a title', () => {
    const result = filterPostsByQuery(
      'camino',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toContain('camino');
  });

  it('will return posts that match a location', () => {
    const result = filterPostsByQuery(
      'cairo',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(1);
  });

  it('will return posts that match a location and title', () => {
    const result = filterPostsByQuery(
      'corsica',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toContain('corsica');
  });

  it('will return posts that match a query with multiple words', () => {
    const result = filterPostsByQuery(
      'tour cairo',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(4);
    expect(result[0].title.toLowerCase()).toContain('tour');
    expect(result[1].title.toLowerCase()).toContain('tour');
    expect(result[2].title.toLowerCase()).toContain('tour');
    expect(result[3].title.toLowerCase()).toContain('egypt');
  });

  it('will return posts that match a query with a year and multiple words', () => {
    const result = filterPostsByQuery(
      'tour 2023 egypt',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(5);
    expect(result[0].title.toLowerCase()).toContain(
      'returning to the alpes and the tour du mont blanc',
    );
    expect(result[1].title.toLowerCase()).toContain(
      'uping my thru-hiking game with the tour du mont blanc in europe',
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
    const result = filterPostsByQuery(
      '1995 foo bar',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(0);
  });
});
