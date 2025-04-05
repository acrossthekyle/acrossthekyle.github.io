import type { NextApiRequest, NextApiResponse } from 'next';
import { headers } from 'next/headers';
import Stripe from 'stripe';

import Constants from '@/constants';

import data from '../_database/store/items';

const LOCAL_HOST_ADDRESS = 'http://localhost:3000/store/';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ id: string }>,
) {
  if (request.method === 'POST') {
    const origin = (request.headers?.referer || LOCAL_HOST_ADDRESS).split(
      '/store/',
    )[0];

    const items = request.body;

    let line_items = [];

    items.forEach(({ colorId, frameId, itemId, sizeId, quantity }) => {
      const found = data.find(({ id }) => id === itemId);

      if (found) {
        const frame = found.styles.find(({ id }) => id === frameId);

        if (frame) {
          const color = frame.colors.length
            ? frame.colors.find(({ id }) => id === colorId)
            : true;
          const size = frame.sizes.find(({ id }) => id === sizeId);

          if (color && size) {
            const colorValue =
              typeof color !== 'boolean' ? `Color: ${color.value}` : null;
            const frameValue = frame.value.toLowerCase();

            const description = [
              `Size: ${size.value}`,
              `Frame: ${frameValue === 'none' ? 'No' : 'Yes'}`,
              typeof color !== 'boolean' ? `Color: ${color.value}` : null,
              frameValue === 'none'
                ? null
                : frameValue.includes('mat')
                  ? 'Yes'
                  : 'No',
            ]
              .filter(Boolean)
              .join(' • ');

            line_items.push({
              price_data: {
                currency: 'USD',
                product_data: {
                  name: found.title,
                  description,
                  images: [`${Constants.IMAGE_BASE_URL}${found.image}`],
                },
                unit_amount: Number(frame.price) * 100,
              },
              quantity,
            });
          }
        }
      }
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      submit_type: 'pay',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      line_items,
      mode: 'payment',
      return_url: `${origin}/store/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    response.status(200).json({
      id: session.client_secret,
    });
  } else {
    response.status(405);
  }
}
