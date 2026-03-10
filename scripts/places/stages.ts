/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';

function getTermini(termini: string, index: number) {
  return termini.includes(' to ') ? termini.split(' to ')[index] : termini;
}

export async function compile(input: string, place) {
  const folders = fs.readdirSync(input)
    .filter((directory) => {
      if (directory !== '.DS_Store') {
        return directory;
      }
    });

  const output = [];

  await Promise.all(
    folders.map(async (folder) => {
      const data = JSON.parse(fs.readFileSync(
        `${input}/${folder}/data.json`,
        'utf8',
      ));

      const start = getTermini(data.termini, 0);
      const end = getTermini(data.termini, 1);
      const isSame = start.toLowerCase() === end.toLowerCase();

      output.push({
        id: folder,
        placeId: place.id,
        date: formatDate(
          parseDate(data.date, 'MMMM do, yyyy', new Date()),
          'LLL do, yyyy',
        ),
        image: data.image,
        location: data.location,
        title: isSame ? end : data.termini,
      });
    }),
  );

  return output;
}
