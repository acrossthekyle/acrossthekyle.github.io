/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { imagePath, wait, writeFile } from './utils';

const input = path.join(process.cwd(), './repository');

export async function go() {
  console.log('--- running images script ---');

  const files = fs.readdirSync(input).filter((file) => {
    const fullPath = path.join(input, file);

    return fs.statSync(fullPath).isFile() && file !== '.DS_Store';
  });

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    let images = [];

    if (fs.existsSync(`${input}/images/${file}`)) {
      images = JSON.parse(fs.readFileSync(`${input}/images/${file}`, 'utf8'));
    }

    if (data.images.length > 0) {
      console.log(`--# processing ${data.title.join(' ')} #--`);

      const updated = [...images];

      const existingCover = images.find((photo) => photo.type === 'cover');

      if (!existingCover) {
        updated.push({
          type: 'cover',
          id: imagePath(data.cover, data.uploads),
        });
      }

      const existing = images.filter((photo) => photo.type === 'image');

      for (const image of data.images) {
        const found = existing.find((item) => item.id === image.id);

        if (!found) {
          updated.push({
            type: 'image',
            id: imagePath(image.id, data.uploads),
          });
        }
      }

      writeFile(`${input}/images`, `${file}`, JSON.stringify(updated, null, 2));
    }
  }

  await wait(500);
}
