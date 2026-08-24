/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository/images');

async function getThumb(url) {
  try {
    const response = await fetch(`${url}?tr=w-40,q-10`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');

    const mimeType = response.headers.get('content-type');

    return `data:${mimeType};base64,${base64String}`;
  } catch (error) {
    console.error('Encoding error:', error.message);

    return null;
  }
}

export async function go() {
  console.log('--- running btoa script ---');

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
      let imageThumb = null;
      let imageNeedsThumb = false;

      if (!image.thumb) {
        imageNeedsThumb = true;
      }

      if (imageNeedsThumb) {
        shouldWait = true;

        await wait(500);

        console.log(`--# generating thumb for image ${image.id} #--`);

        imageThumb = await getThumb(image.src);
      } else {
        imageThumb = image.thumb;
      }

      images.push({
        ...image,
        thumb: imageThumb,
      });

      imageThumb = null;
      imageNeedsThumb = false;
    }

    if (shouldWait) {
      writeFile(input, file, JSON.stringify(images, null, 2));

      await wait(500);
    }
  }
}
