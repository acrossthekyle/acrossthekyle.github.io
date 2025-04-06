import type { NextApiRequest, NextApiResponse } from 'next';

import type { Posts } from '@/types';

import posts from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<
    Pick<Posts.Post, 'date' | 'image' | 'snippet' | 'tags' | 'title' | 'uri'>[]
  >,
) {
  response.status(200).json(
    getPublicPosts(posts).map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags,
      title,
      uri,
    })),
  );
}
