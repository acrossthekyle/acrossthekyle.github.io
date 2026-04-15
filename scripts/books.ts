/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/books.json');

export async function go() {
  console.log('--- running books script ---');

  const data = JSON.parse(fs.readFileSync(input, 'utf8'));

  if (data.length) {
    write(
      'books.js',
      data,
    );
  }
}
