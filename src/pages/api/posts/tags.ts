import { flatten, uniq } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const filtered = data.filter(({ isPrivate }) => !isPrivate);

  response
    .status(200)
    .json(uniq(flatten(filtered.map(({ tags }) => tags.split(',')))));
}
