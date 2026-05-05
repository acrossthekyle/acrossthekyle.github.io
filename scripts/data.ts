/* eslint-disable */
// @ts-nocheck

import { go as btoa } from './btoa';
import { go as collections } from './collections';
import { go as exif } from './exif';

async function go() {
  await btoa();
  await exif();

  collections();
};

go();
