/* eslint-disable */
// @ts-nocheck

import { format as formatDate, getUnixTime, parse as parseDate } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/blog');

export async function go() {
  const writings = fs.readdirSync(input).filter((item) => {
    if (item !== '.DS_Store') {
      return item;
    }
  });

  const data = [];

  await Promise.all(
    writings.map((year) => {
      const months = fs.readdirSync(path.join(input, year)).filter((item) => {
        if (item !== '.DS_Store') {
          return item;
        }
      });

      months.map((month) => {
        const days = fs.readdirSync(path.join(input, `${year}/${month}`)).filter((item) => {
          if (item !== '.DS_Store') {
            return item;
          }
        });

        days.map((day) => {
          const file = fs.readFileSync(
            path.join(input, `${year}/${month}/${day}/index.md`),
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

    write('blog.js', sorted);
  }
}
