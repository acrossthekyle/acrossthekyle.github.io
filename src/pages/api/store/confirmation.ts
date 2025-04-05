import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { customer_details } = await stripe.checkout.sessions.retrieve(
      request.query.session_id,
      {
        expand: ['line_items', 'payment_intent'],
      },
    );

    response.status(200).json({
      email: customer_details.email,
      name: customer_details.name,
    });
  } else {
    response.status(405).json({ message: 'Method Not Allowed' });
  }
}
