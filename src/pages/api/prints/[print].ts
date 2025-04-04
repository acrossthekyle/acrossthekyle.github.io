import type { NextApiRequest, NextApiResponse } from 'next';

import type { PrintApiResponse } from '@/types';

import results from '../_database/prints';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PrintApiResponse>,
) {
  const result =
    [...results].find(({ uri }) => uri.includes(String(request.query.print))) ??
    undefined;

  if (result === undefined) {
    response.status(404);
  } else {
    response.status(200).json({
      image: result.image,
      paymentLinks: result.paymentLinks.map(
        (paymentLink) => `https://buy.stripe.com/${paymentLink}`,
      ),
      snippet: result.snippet,
      title: result.title,
      uri: result.uri,
    });
  }
}
