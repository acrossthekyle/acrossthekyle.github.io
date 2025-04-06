import { getSpecialSearchResults } from './search';

describe('_utils/search', () => {
  it('will return an empty array if the query string is empty', () => {
    expect(getSpecialSearchResults('')).toHaveLength(0);
  });

  it('will return resume link', () => {
    const result = getSpecialSearchResults('work');

    expect(result).toHaveLength(1);
    expect(result[0].title).toEqual('My Resume');
  });

  it('will return packs link', () => {
    const result = getSpecialSearchResults('gear');

    expect(result).toHaveLength(1);
    expect(result[0].title).toEqual('Packs');
  });
});
