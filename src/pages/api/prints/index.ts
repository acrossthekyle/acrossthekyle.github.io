import type { NextApiRequest, NextApiResponse } from 'next';

import results from '../_database/prints';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json(
    results.map(({ image, slug, snippet, title }) => ({
      image: `shop/prints/${image}`,
      slug,
      snippet,
      title,
      uri: `shop/prints/${slug}`,
    })),
  );
}
