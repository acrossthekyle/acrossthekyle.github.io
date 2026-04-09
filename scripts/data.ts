/* eslint-disable */
// @ts-nocheck

import { go as albums } from './albums';
import { go as exif } from './exif';
import { go as gear } from './gear';
import { go as trails } from './trails';
import { go as thoughts } from './thoughts';

async function go() {
  await exif();

  albums();
  gear();
  trails();
  thoughts();
};

go();
