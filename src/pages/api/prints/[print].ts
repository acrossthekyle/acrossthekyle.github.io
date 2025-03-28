import type { NextApiRequest, NextApiResponse } from 'next';

import type { PrintApiResponse } from '@/types/print';

import results from '../_database/prints';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PrintApiResponse>,
) {
  const result =
    [...results].find(({ slug }) => slug === request.query.print) ?? undefined;

  if (result === undefined) {
    response.status(404);
  } else {
    response.status(200).json({
      image: `shop/prints/${result.image}`,
      paymentLinks: result.paymentLinks.map(
        (paymentLink) => `https://buy.stripe.com/${paymentLink}`,
      ),
      title: result.title,
    });
  }
}
