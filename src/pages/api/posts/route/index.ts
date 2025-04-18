import type { NextApiRequest, NextApiResponse } from 'next';

import { routeFromGpx } from '../../_utils/posts';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<[number, number][]>,
) {
  const data = await routeFromGpx(`${request.body}.gpx`);

  if (!data) {
    response.status(404);

    return;
  }

  const coordinates = [];

  data.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        coordinates.push(coordinate);
      }
    });
  });

  response.status(200).json(
    coordinates
      .filter((_, index) => index % 2 !== 0)
      .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
      .map((coordinate) => [coordinate[1], coordinate[0]]),
  );
}
