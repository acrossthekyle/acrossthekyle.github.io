/* eslint-disable */
// @ts-nocheck

import { go as btoa } from './btoa';
import { go as collections } from './collections';
import { go as exif } from './exif';
import { go as photos } from './photos';

async function go() {
  await photos();

  await btoa();

  await exif();

  collections();
};

go();
