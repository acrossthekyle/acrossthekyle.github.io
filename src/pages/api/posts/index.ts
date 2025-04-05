import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json(
    getPublicPosts(data).map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags,
      title,
      uri,
    })),
  );
}
