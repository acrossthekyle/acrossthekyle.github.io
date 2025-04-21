import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import fs from 'fs/promises';
import path from 'path';

export async function routeFromGpx(filePath: string): Promise<any | undefined> {
  try {
    const xml = await fs.readFile(
      path.join(process.cwd(), './src/routes', filePath),
      'utf-8',
    );

    return gpx(new DOMParser().parseFromString(xml, 'text/xml'));
  } catch (e: any) {
    return undefined;
  }
}

export function trimGpxCoordinates(gpx) {
  const coordinates = [];

  gpx.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        coordinates.push(coordinate);
      }
    });
  });

  return coordinates
    .filter((_, index) => index % 3 === 2)
    .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
    .map((coordinate) => [coordinate[1], coordinate[0]]);
}
