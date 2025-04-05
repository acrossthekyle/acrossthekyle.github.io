import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const filtered = getPublicPosts(data);

  const result = [filtered[0], filtered[1], filtered[2]];

  response.status(200).json(
    result.map(({ date, image, title, uri }) => ({
      date,
      image,
      title,
      uri,
    })),
  );
}
