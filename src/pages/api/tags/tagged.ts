import type { NextApiRequest, NextApiResponse } from 'next';

import type { Tags } from '@/types';
import Utils from '@/utils';

import posts from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ results: Tags.Tag.Item[]; total: number }>,
) {
  const tag = Utils.router.getQueryItem(request.query, 'tag');

  const results: Tags.Tag.Item[] = getPublicPosts(posts)
    .filter(({ tags }) => tags.includes(tag))
    .map((post) => ({
      date: post.date,
      image: post.image,
      snippet: post.snippet,
      tags: post.tags,
      title: post.title,
      uri: post.uri,
    }));

  response.status(200).json({
    results,
    total: results.length,
  });
}
