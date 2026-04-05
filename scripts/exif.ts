/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository/albums');

async function getExif(src) {
  const privateKey = process.env.IMAGE_KIT_IO_PRIVATE_KEY;

  try {
    const encodedUrl = encodeURIComponent(`https://ik.imagekit.io/acrossthekyle/uploads/${src}`);
    const auth = `${btoa(privateKey)}Og==`;

    const response = await fetch(
      `https://api.imagekit.io/v1/metadata?url=${encodedUrl}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${auth}`,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const metadata = await response.json();

    return metadata;
  } catch {
    return null;
  }
}

export async function go() {
  const albums = [];

  const files = fs
    .readdirSync(input)
    .filter((directory) => directory !== '.DS_Store');

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    const images = [];

    for (const image of data.images) {
      if (!image.exif) {
        await wait(1500);

        const response = await getExif(image.src);

        if (response !== null) {
          const aperture = response.exif?.exif?.ApertureValue;
          const exposure = response.exif?.exif?.ExposureCompensation;
          const fnumber = response.exif?.exif?.FNumber;

          images.push({
            ...image,
            exif: {
              aperture: aperture !== undefined ? aperture.toFixed(4).replace('.', '/') : null,
              camera: response.exif?.image?.Model || null,
              exposure: exposure !== undefined ? Number(exposure).toFixed(1) : null,
              fnumber: fnumber !== undefined ? fnumber.toFixed(2) : null,
              focal: response.exif?.exif?.FocalLengthIn35mmFormat || null,
              iso: response.exif?.exif?.ISO || null,
            },
          });
        } else {
          images.push(image);
        }
      } else {
        images.push(image);
      }
    }

    writeFile(input, file, JSON.stringify({
      ...data,
      images,
    }, null, 2));

    await wait(500);
  }
}
