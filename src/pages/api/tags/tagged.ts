import type { NextApiRequest, NextApiResponse } from 'next';

import posts from '../_database/posts';
import prints from '../_database/prints';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const filteredPosts = getPublicPosts(posts).filter(({ tags }) =>
    tags.includes(
      (Array.isArray(request.query.tag)
        ? request.query.tag
        : [request.query.tag]
      ).join(' '),
    ),
  );

  const filteredPrints = prints.filter(({ tags }) =>
    tags.includes(
      (Array.isArray(request.query.tag)
        ? request.query.tag
        : [request.query.tag]
      ).join(' '),
    ),
  );

  const combined = [...filteredPosts, ...filteredPrints];

  console.log(combined);

  response.status(200).json({
    results: combined.map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags: !Array.isArray(tags) ? tags.split(',') : tags,
      title,
      uri,
    })),
    total: combined.length,
  });
}
