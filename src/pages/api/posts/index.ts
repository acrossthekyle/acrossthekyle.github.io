import type { NextApiRequest, NextApiResponse } from 'next';

import type { PublicPostsApiResponse } from '@/types/post';

import data from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PublicPostsApiResponse[]>,
) {
  response.status(200).json(
    getPublicPosts(data).map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags: tags.split(','),
      title,
      uri,
    })),
  );
}
