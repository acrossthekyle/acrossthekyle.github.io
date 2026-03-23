/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const output = path.join(process.cwd(), './src/db');

async function createDirectory(destination) {
  try {
    await fs.readdirSync(destination);
  } catch (e) {
    await fs.mkdirSync(destination);
  }
}

async function writeFile(destination, filename, content, silent = false) {
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

export async function write(destination, data) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(output, destination, json);
}

export function turnStringIntoArrayForLists(value: string, limit = 12) {
  const parts = value.split(' ');
  let result = [''];
  let index = 0;

  parts.forEach((part: string) => {
    if (result[index].length < limit) {
      const combination = `${result[index]} ${part.trim()}`.trim();

      if (combination.length < limit) {
        result.splice(index, 1, combination);
      } else if (part.length > limit ) {
        result.splice(index, 1, part.trim());
      } else {
        ++index

        result.splice(index, 1, part.trim());
      }
    }
  });

  return result;
};
