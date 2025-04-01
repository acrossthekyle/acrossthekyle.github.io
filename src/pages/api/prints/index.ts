import type { NextApiRequest, NextApiResponse } from 'next';

import type { PrintsApiResponse } from '@/types';

import results from '../_database/prints';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PrintsApiResponse[]>,
) {
  response.status(200).json(
    results.map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags,
      title,
      uri,
    })),
  );
}
