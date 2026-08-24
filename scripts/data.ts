/* eslint-disable */
// @ts-nocheck

import { go as btoa } from './btoa';
import { go as cache } from './cache';
import { go as exif } from './exif';
import { go as images } from './images';
import { go as trails } from './trails';

async function go() {
  await images();
  await btoa();
  await exif();
  await trails();

  cache();
};

go();
