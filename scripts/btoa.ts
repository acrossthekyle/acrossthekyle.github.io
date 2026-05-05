/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository');

async function getThumb(url) {
  try {
    const response = await fetch(`https://ik.imagekit.io/acrossthekyle/uploads/${url}?tr=w-40,q-10`);

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

  const files = fs
    .readdirSync(input)
    .filter((directory) => directory !== '.DS_Store');

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    console.log(`--# processing ${data.title} #--`);

    const covers = [];

    for (const cover of data.cover) {
      let coverThumb = null;
      let coverHasSrc = true;
      let coverNeedsThumb = false;

      if (typeof cover === 'string') {
        coverNeedsThumb = true;
        coverHasSrc = false;
      } else if (!cover.thumb) {
        coverNeedsThumb = true;
      }

      if (coverNeedsThumb) {
        await wait(500);

        console.log(`--# getting thumb for cover ${cover} #--`);

        coverThumb = await getThumb(cover);
      } else {
        coverThumb = cover.thumb;
      }

      covers.push({
        src: coverHasSrc ? cover.src : cover,
        thumb: coverThumb,
      });

      coverThumb = null;
      coverHasSrc = true;
      coverNeedsThumb = false;
    }

    const images = [];

    for (const image of data.images) {
      let imageThumb = null;
      let imageNeedsThumb = false;

      if (!image.thumb) {
        imageNeedsThumb = true;
      }

      if (imageNeedsThumb) {
        await wait(500);

        console.log(`--# getting thumb for image ${image.src} #--`);

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

    // console.log(JSON.stringify({
    //   ...data,
    //   cover: covers,
    //   images,
    // }, null, 2));

    writeFile(input, file, JSON.stringify({
      ...data,
      cover: covers,
      images,
    }, null, 2));

    await wait(500);
  }
}
