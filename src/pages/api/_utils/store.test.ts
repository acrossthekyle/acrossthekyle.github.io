import store from '../_database/store/items';

import { filterStoreItemsByQuery, getUniqueTitles } from './store';

describe('_utils/store', () => {
  it('will get all unique titles for filtering', () => {
    expect(getUniqueTitles(store).length).toBeLessThanOrEqual(store.length);
  });

  it('will return an empty array if the query string is empty', () => {
    expect(filterStoreItemsByQuery(store, '')).toHaveLength(0);
  });

  it('will return items that match a title', () => {
    const result = filterStoreItemsByQuery(store, 'Gateway');

    expect(result).toHaveLength(1);
    expect(result[0].title.toLowerCase()).toEqual('stone gateway');
  });

  it('will return no items due to no matches', () => {
    const result = filterStoreItemsByQuery(store, 'foo');

    expect(result).toHaveLength(0);
  });
});
