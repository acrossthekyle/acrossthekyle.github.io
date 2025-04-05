import type { NextApiRequest, NextApiResponse } from 'next';

import results from '../_database/store/items';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    response.status(405, 'Method not allowed');
  } else {
    response.status(200).json(
      results.map(
        ({ date, id, location, snippet, styles, tags, year, ...rest }) => ({
          ...rest,
          price: styles[0].price,
        }),
      ),
    );
  }
}
