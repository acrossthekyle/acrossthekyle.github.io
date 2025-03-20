import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const results = getPublicPosts(data).filter(({ tags }) =>
    tags.includes(
      (Array.isArray(request.query.tag)
        ? request.query.tag
        : [request.query.tag]
      ).join(' '),
    ),
  );

  response.status(200).json({
    results: results.map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags: tags.split(','),
      title,
      uri,
    })),
    total: results.length,
  });
}
