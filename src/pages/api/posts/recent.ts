import type { NextApiRequest, NextApiResponse } from 'next';

import type { Posts } from '@/types';

import posts from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<
    Pick<Posts.Post, 'date' | 'image' | 'title' | 'uri'>[]
  >,
) {
  const results = getPublicPosts(posts).slice(0, 3);

  response.status(200).json(
    results.map(({ date, image, title, uri }) => ({
      date,
      image,
      title,
      uri,
    })),
  );
}
