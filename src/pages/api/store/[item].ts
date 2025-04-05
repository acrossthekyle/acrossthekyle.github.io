import type { NextApiRequest, NextApiResponse } from 'next';

import results from '../_database/store/items';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const result =
    [...results].find(({ uri }) => uri.includes(String(request.query.item))) ??
    undefined;

  if (request.method !== 'GET') {
    response.status(405, 'Method not allowed');
  } else if (result === undefined) {
    response.status(404);
  } else {
    response.status(200).json({
      id: result.id,
      image: result.image,
      styles: result.styles,
      snippet: result.snippet,
      title: result.title,
      uri: result.uri,
    });
  }
}
