/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const output = path.join(process.cwd(), './src/db');

export async function createDirectory(destination) {
  try {
    await fs.readdirSync(destination);
  } catch (e) {
    await fs.mkdirSync(destination);
  }
}

export async function writeFile(destination, filename, content, silent = false) {
  createDirectory(destination);

  await fs.writeFile(`${destination}/${filename}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    if (!silent) {
      console.log(`wrote ${destination}/${filename}`);
    }
  });
}

export async function write(destination, data, outputOverride = undefined) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(outputOverride ?? output, destination, json);
}
