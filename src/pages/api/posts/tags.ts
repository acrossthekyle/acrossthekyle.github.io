import { flatten, uniq } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/posts';
import { getPublicPosts } from '../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<string[]>,
) {
  response
    .status(200)
    .json(
      uniq(flatten(getPublicPosts(data).map(({ tags }) => tags.split(',')))),
    );
}
