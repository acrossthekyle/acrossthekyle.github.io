import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json(
    data
      .filter(({ isPrivate }) => !isPrivate)
      .map(({ date, image, snippet, tags, title, uri }) => ({
        date,
        image,
        snippet,
        tags: tags.split(','),
        title,
        uri,
      })),
  );
}
