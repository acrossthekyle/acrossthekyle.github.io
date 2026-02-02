/* eslint-disable */
// @ts-nocheck

import { format as formatDate, getUnixTime, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

const repository = path.join(process.cwd(), './repository/words');
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

async function writeData(destination, data) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(output, destination, json);
}

export async function go() {
  const writings = fs.readdirSync(repository).filter((item) => {
    if (item !== '.DS_Store') {
      return item;
    }
  });

  const data = [];

  await Promise.all(
    writings.map((year, index) => {
      const months = fs.readdirSync(path.join(repository, year)).filter((item) => {
        if (item !== '.DS_Store') {
          return item;
        }
      });

      months.map((month) => {
        const days = fs.readdirSync(path.join(repository, `${year}/${month}`)).filter((item) => {
          if (item !== '.DS_Store') {
            return item;
          }
        });

        days.map((day) => {
          const meta = JSON.parse(fs.readFileSync(
            path.join(repository, `${year}/${month}/${day}/meta.json`),
            'utf8',
          ));

          const content = fs.readFileSync(
            path.join(repository, `${year}/${month}/${day}/content.md`),
            'utf8',
          );

          const date = parseDate(`${year}/${month}/${day}`, 'yyyy/MM/dd', new Date());

          data.push({
            ...meta,
            content,
            date: formatDate(date, 'LLLL do, yyyy'),
            index,
            timestamp: getUnixTime(date),
          });
        });
      });
    }),
  );

  if (data.length) {
    const sorted = data.sort((a, b) => b.timestamp - a.timestamp);

    writeData('words.js', sorted);
  }
}
