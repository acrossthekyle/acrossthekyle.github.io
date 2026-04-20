/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/channels.json');

export async function go() {
  console.log('--- running channels script ---');

  const data = JSON.parse(fs.readFileSync(input, 'utf8'));

  if (data.length) {
    write(
      'channels.js',
      data,
    );
  }
}
