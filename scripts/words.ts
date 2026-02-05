/* eslint-disable */
// @ts-nocheck

import { format as formatDate, getUnixTime, parse as parseDate } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

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
    writings.map((year) => {
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
          const file = fs.readFileSync(
            path.join(repository, `${year}/${month}/${day}/index.md`),
            'utf8',
          );

          const { content, data: meta } = matter(file);

          const date = parseDate(`${year}/${month}/${day}`, 'yyyy/MM/dd', new Date());

          data.push({
            ...meta,
            content,
            date: formatDate(date, 'LLLL do, yyyy'),
            readingTime: Math.ceil(readingTime(content).minutes).toFixed(0),
            timestamp: getUnixTime(date),
          });
        });
      });
    }),
  );

  if (data.length) {
    const sorted = data.map((item, index) => ({
      ...item,
      index,
    })).sort((a, b) => b.timestamp - a.timestamp);

    writeData('words.js', sorted);
  }
}
