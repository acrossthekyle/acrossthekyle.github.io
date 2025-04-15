import type { NextApiRequest, NextApiResponse } from 'next';

import type { Components } from '@/types';

import posts from './_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Components.Marker[]>,
) {
  response.status(200).json([
    ...posts
      .filter(({ marker }) => marker)
      .map(({ isPrivate, marker, title, uri }) => ({
        ...marker,
        isPrivate,
        label: title,
        uri,
      })),
    // Home
    {
      isPointOfOrigin: true,
      isPrivate: false,
      label: 'Homebase',
      left: '18%',
      top: '23%',
    },
  ]);
}
