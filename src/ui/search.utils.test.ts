import posts from '../posts';

import {
  filterByQuery,
  getAllUniqueTitles,
  getAllUniqueLocations,
} from './search.utils';

let uniqueTitles;
let uniqueLocations;

describe('search.utils', () => {
  beforeAll(() => {
    uniqueTitles = getAllUniqueTitles(posts);
    uniqueLocations = getAllUniqueLocations(posts);
  });

  it('will get all unique titles for filtering', () => {
    expect(uniqueTitles.length).toBeLessThanOrEqual(posts.getTotal());
    expect(uniqueTitles[0]).toEqual(
      'returning to the alpes and the tour du mont blanc',
    );
  });

  it('will get all unique locations for filtering', () => {
    expect(uniqueLocations.length).toBeLessThanOrEqual(posts.getTotal());
    expect(uniqueLocations[0]).toEqual('alpes, europe');
  });

  it('will return an empty array if the query string is empty', () => {
    expect(
      filterByQuery('', posts, uniqueTitles, uniqueLocations),
    ).toHaveLength(0);
  });

  it('will return posts that match a year', () => {
    const result = filterByQuery('2018', posts, uniqueTitles, uniqueLocations);

    expect(result).toHaveLength(2);
    expect(result[0].date).toContain('2018');
    expect(result[1].date).toContain('2018');
  });

  it('will not return posts that do not match a year', () => {
    const result = filterByQuery('2000', posts, uniqueTitles, uniqueLocations);

    expect(result).toHaveLength(0);
  });

  it('will return posts that match a title', () => {
    const result = filterByQuery(
      'camino',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toContain('camino');
  });

  it('will return posts that match a location', () => {
    const result = filterByQuery('cairo', posts, uniqueTitles, uniqueLocations);

    expect(result).toHaveLength(1);
    expect(result[0].locationFull.toLowerCase()).toContain('cairo');
  });

  it('will return posts that match a location and title', () => {
    const result = filterByQuery(
      'corsica',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(1);
    expect(result[0].locationFull.toLowerCase()).toContain('corsica');
    expect(result[0].title.toLowerCase()).toContain('corsica');
  });

  it('will return posts that match a query with multiple words', () => {
    const result = filterByQuery(
      'tour cairo',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(3);
    expect(result[0].title.toLowerCase()).toContain('tour');
    expect(result[1].title.toLowerCase()).toContain('tour');
    expect(result[2].locationFull.toLowerCase()).toContain('cairo');
  });

  it('will return posts that match a query with a year and multiple words', () => {
    const result = filterByQuery(
      'tour 2023 egypt',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(4);
    expect(result[0].title.toLowerCase()).toContain(
      'returning to the alpes and the tour du mont blanc',
    );
    expect(result[1].title.toLowerCase()).toContain(
      'uping my thru-hiking game with the tour du mont blanc in europe',
    );
    expect(result[2].title.toLowerCase()).toContain(
      'conquering the great hike of corsica, france',
    );
    expect(result[3].title.toLowerCase()).toContain(
      'welcoming the new year as we explored the land of egypt',
    );
  });

  it('will return no posts due to no matches', () => {
    const result = filterByQuery(
      '1995 foo bar',
      posts,
      uniqueTitles,
      uniqueLocations,
    );

    expect(result).toHaveLength(0);
  });
});
