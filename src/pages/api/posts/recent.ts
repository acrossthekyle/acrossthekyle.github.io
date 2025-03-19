import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const filtered = data.filter(({ isPrivate }) => !isPrivate);

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
