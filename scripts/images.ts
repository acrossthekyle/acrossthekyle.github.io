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
    console.log(`### processing ${file}`);

    if (!fs.existsSync(`${input}/images/${file}`)) {
      console.log(`!!! wrote images/${file}`);

      writeFile(`${input}/images`, file, JSON.stringify([], null, 2));

      await wait(100);
    }

    const collection = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));
    const existing = JSON.parse(fs.readFileSync(`${input}/images/${file}`, 'utf8'));

    const retainable = [];

    for (const image of existing) {
      const found = collection.images.find((item) => item.id === image.id);

      if (found) {
        retainable.push(image);
      }
    }

    for (const image of collection.images) {
      if (!retainable.find((item) => item.id === image.id)) {
        console.log('!!! new image found: ', image.id);
        retainable.push({
          id: image.id,
          src: imagePath(image.id, collection.uploads),
        });
      }
    }

    writeFile(`${input}/images`, file, JSON.stringify(retainable, null, 2));

    await wait(200);
  }
}
