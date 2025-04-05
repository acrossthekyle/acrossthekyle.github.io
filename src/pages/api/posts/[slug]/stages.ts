import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../../_database/posts';
import { getPublicPosts } from '../../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const query = request.query.slug;

  const posts = getPublicPosts(data);

  const post = posts.find(({ uri }) => uri === `/posts/${query}`) ?? null;

  if (post === null) {
    response.status(404);

    return;
  }

  response.status(200).json(post.stages);
}
