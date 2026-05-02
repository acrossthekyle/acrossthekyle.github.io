/* eslint-disable */
// @ts-nocheck

import { go as albums } from './albums';
import { go as btoa } from './btoa';
import { go as exif } from './exif';

async function go() {
  await btoa();
  await exif();

  albums();
};

go();
