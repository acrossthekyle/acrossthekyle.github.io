import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../_database/store/items';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    const items = request.body;

    let results = [];

    items.forEach(({ colorId, frameId, itemId, sizeId, quantity }) => {
      const found = data.find(({ id }) => id === itemId);

      if (found) {
        const frame = found.styles.find(({ id }) => id === frameId);

        if (frame) {
          const color = frame.colors.length
            ? frame.colors.find(({ id }) => id === colorId)
            : true;
          const size = frame.sizes.find(({ id }) => id === sizeId);
          const frameValue = frame.value.toLowerCase();

          if (color && size) {
            results.push({
              color: typeof color !== 'boolean' ? color.value : null,
              frame: frameValue === 'none' ? 'No' : 'Yes',
              image: found.image,
              mat:
                frameValue === 'none'
                  ? null
                  : frameValue.includes('mat')
                    ? 'Yes'
                    : 'No',
              name: found.title,
              price: frame.price,
              quantity,
              size: size.value,
              total: (Number(frame.price) * Number(quantity)).toFixed(2),
              uri: found.uri,
            });
          }
        }
      }
    });

    response.status(200).json({
      items: results,
      total: results
        .reduce((sum, { total }) => sum + Number(total), 0)
        .toFixed(2),
    });
  } else {
    response.status(405).json({ message: 'Method Not Allowed' });
  }
}
