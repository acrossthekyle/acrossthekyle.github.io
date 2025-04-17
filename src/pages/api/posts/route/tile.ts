import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const r = request.query.r;
  const x = request.query.x;
  const y = request.query.y;
  const z = request.query.z;
  const theme = request.query.theme;

  let tile = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;

  if (process.env.NODE_ENV === 'production') {
    tile = `https://tiles.stadiamaps.com/tiles/alidade_smooth${theme === 'light' ? '' : '_dark'}/${z}/${x}/${y}${r}.png?api_key=${process.env.LEAFLET_STADIA_API_KEY}`;
  }

  try {
    const result = await fetch(tile);
    const blob = await result.blob();
    const buffer = await blob.arrayBuffer();

    response
      .status(200)
      .setHeader('Content-Type', 'image/png')
      .setHeader('Content-Length', blob.size)
      .setHeader('Cache-Control', 'max-age=86400')
      .send(Buffer.from(buffer));
  } catch (e) {
    response.status(500);
  }
}
