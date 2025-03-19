import type { NextApiRequest, NextApiResponse } from 'next';

import results from '../_database/packs';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json(
    results.map((result) => ({
      title: result.title,
      type: result.type,
      url: `https://lighterpack.com/r/${result.slug}`,
    })),
  );
}
