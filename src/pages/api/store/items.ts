import type { NextApiRequest, NextApiResponse } from 'next';

import type { Store } from '@/types';

import items from '../_database/store/items';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Store.Page.Item[]>,
) {
  if (request.method !== 'GET') {
    response.status(405);
  } else {
    response.status(200).json(
      items.map(({ image, styles, title, uri }) => ({
        image,
        price: styles[0].price,
        title,
        uri,
      })),
    );
  }
}
