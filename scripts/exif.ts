/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository/meta');

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
  console.log('--- running exif script ---');

  const files = fs.readdirSync(input).filter((file) => {
    const fullPath = path.join(input, file);

    return fs.statSync(fullPath).isFile() && file !== '.DS_Store';
  });

  for (const file of files) {
    let shouldWait = false;

    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    console.log(`--# processing ${file} #--`);

    const images = [];

    for (const image of data) {
      if (!image.exif) {
        shouldWait = true;

        await wait(1500);

        console.log(`--# getting exif for ${image.id} #--`);

        const response = await getExif(image.id);

        if (response !== null) {
          const aperture = response.exif?.exif?.ApertureValue;
          const exposure = response.exif?.exif?.ExposureCompensation;
          const fnumber = response.exif?.exif?.FNumber;
          const shutter = response.exif?.exif?.ShutterSpeedValue;

          images.push({
            ...image,
            exif: {
              aperture: aperture !== undefined ? aperture.toFixed(4).replace('.', '/') : null,
              camera: response.exif?.image?.Model || null,
              exposure: exposure !== undefined ? Number(exposure).toFixed(1) : null,
              fnumber: fnumber !== undefined ? fnumber.toFixed(2) : null,
              focal: response.exif?.exif?.FocalLengthIn35mmFormat || null,
              format: response.format || null,
              height: response.height || null,
              iso: response.exif?.exif?.ISO || null,
              shutter: shutter !== undefined ? shutter.toFixed(2) : null,
              width: response.width || null,
            },
          });
        } else {
          images.push(image);
        }
      } else {
        images.push(image);
      }
    }

    if (shouldWait) {
      // console.log(JSON.stringify(images, null, 2));

      writeFile(input, file, JSON.stringify(images, null, 2));

      await wait(500);
    }
  }
}
