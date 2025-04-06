import type { NextApiRequest, NextApiResponse } from 'next';

import type { Search } from '@/types';
import Utils from '@/utils';

import posts from './_database/posts';
import store from './_database/store/items';
import { filterPostsByQuery, getPublicPosts } from './_utils/posts';
import { getSpecialSearchResults } from './_utils/search';
import { filterStoreItemsByQuery } from './_utils/store';

function getUniqueSearchResults(results: Search.Item[], key: string) {
  const uniqueResults = new Set();

  return results.filter((item) => {
    const value = item[key];

    if (!uniqueResults.has(value)) {
      uniqueResults.add(value);

      return true;
    }

    return false;
  });
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ results: Search.Item[]; total: number }>,
) {
  const query = Utils.router.getQueryItem(request.query, 'query');

  const results = getUniqueSearchResults(
    [
      ...filterPostsByQuery(getPublicPosts(posts), query),
      ...filterStoreItemsByQuery(store, query),
      ...getSpecialSearchResults(query),
    ],
    'uri',
  );

  response.status(200).json({
    results,
    total: results.length,
  });
}
