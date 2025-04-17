import type { NextApiRequest, NextApiResponse } from 'next';

import { routeFromGpx } from '../_utils/posts';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<[number, number][]>,
) {
  const data = await routeFromGpx(`${request.body}.gpx`);

  if (!data) {
    response.status(404);

    return;
  }

  response
    .status(200)
    .json(
      data.features[0].geometry.coordinates
        .filter((_, index) => index % 2 !== 0)
        .map((coordinate) => [coordinate[1], coordinate[0]]),
    );
}
