/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository');

export async function go() {
  console.log('--- running photos script ---');

  const files = fs.readdirSync(input).filter((file) => {
    const fullPath = path.join(input, file);

    return fs.statSync(fullPath).isFile() && file !== '.DS_Store';
  });

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));
    let photos = [];

    try {
      photos = JSON.parse(fs.readFileSync(`${input}/meta/${file.replace('.json', '.photos.json')}`, 'utf8'));
    } catch {
      // do nothing
    }

    if (data.images.length > 0) {
      console.log(`--# processing ${data.title.join(' ')} #--`);

      const updated = [...photos];

      const existingCover = photos.find((photo) => photo.type === 'cover');

      if (!existingCover) {
        updated.push({
          type: 'cover',
          id: data.cover,
        });
      }

      const existingPhotos = photos.filter((photo) => photo.type === 'image');

      for (const image of data.images) {
        const foundImage = existingPhotos.find((existing) => existing.id === image.src);

        if (!foundImage) {
          updated.push({
            type: 'image',
            id: image.src,
          });
        }
      }

      // console.log(`meta/${file.replace('.json', '.photos.json')}`, JSON.stringify(updated, null, 2));

      writeFile(input, `meta/${file.replace('.json', '.photos.json')}`, JSON.stringify(updated, null, 2));
    }
  }

  await wait(500);
}
