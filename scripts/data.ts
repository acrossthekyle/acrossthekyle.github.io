/* eslint-disable */
// @ts-nocheck

import { go as albums } from './albums';
import { go as exif } from './exif';

async function go() {
  await exif();

  albums();
};

go();
