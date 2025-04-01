import type { NextApiRequest, NextApiResponse } from 'next';

import type { PostsSearchApiResponse } from '@/types';

import data from '../_database/posts';
import {
  filterPostsByQuery,
  getPublicPosts,
  getUniquePostLocations,
  getUniquePostTitles,
  getUniqueSearchResults,
} from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PostsSearchApiResponse>,
) {
  const posts = getPublicPosts(data);

  const results = getUniqueSearchResults(
    filterPostsByQuery(
      (Array.isArray(request.query.query)
        ? request.query.query
        : [request.query.query]
      ).join(' '),
      posts,
      getUniquePostTitles(posts),
      getUniquePostLocations(posts),
    ),
    'uri',
  );

  response.status(200).json({
    results,
    total: results.length,
  });
}
