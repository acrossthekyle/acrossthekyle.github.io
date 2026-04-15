/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/expertise.json');

export async function go() {
  console.log('--- running expertise script ---');

  const data = JSON.parse(fs.readFileSync(input, 'utf8'));

  if (data.length) {
    write(
      'expertise.js',
      data,
    );
  }
}
