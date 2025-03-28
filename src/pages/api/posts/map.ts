import type { NextApiRequest, NextApiResponse } from 'next';

import type { PostsMapApiResponse } from '@/types/post';

import data from '../_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PostsMapApiResponse[]>,
) {
  response.status(200).json([
    ...data
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
