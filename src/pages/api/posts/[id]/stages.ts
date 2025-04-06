import type { NextApiRequest, NextApiResponse } from 'next';

import type { Posts } from '@/types';

import data from '../../_database/posts';
import { getPublicPosts } from '../../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Posts.Stage[]>,
) {
  const posts = getPublicPosts(data);

  const post =
    posts.find(({ uri }) => uri === `/posts/${request.query.id}`) ?? null;

  response.status(200).json(post === null ? [] : post.stages);
}
