/* eslint-disable */
// @ts-nocheck

import { go as albums } from './albums';
import { go as books } from './books';
import { go as channels } from './channels';
import { go as exif } from './exif';
import { go as expertise } from './expertise';
import { go as gear } from './gear';
import { go as resume } from './resume';
import { go as trails } from './trails';

async function go() {
  await exif();

  albums();
  books();
  channels();
  expertise();
  gear();
  resume();
  trails();
};

go();
