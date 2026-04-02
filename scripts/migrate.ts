/* eslint-disable */
// @ts-nocheck

import { format as formatDate, getUnixTime, parse as parseDate } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { createDirectory, writeFile } from './utils';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getFormattedCoords(locationName) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'geocoding script v1.1 (acrossthekyle@gmail.com)',
    },
  });

  if (!response.ok) {
    return '';
  };

  const data = await response.json();

  if (data && data.length > 0) {
    const { lat, lon } = data[0];
    const formattedLat = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}`;
    const formattedLon = `${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? 'E' : 'W'}`;
    return `${formattedLat}, ${formattedLon}`;
  }

  return '';
}

const input = path.join(process.cwd(), './repository/trails');

async function go() {
  const folders = fs.readdirSync(input).filter((item) => {
    return ![
      '.DS_Store',
      'grays-peak-2020',
      'la-plata-peak-2020',
      'mount-belford-2022',
      'mount-bierstadt-2020',
      'mount-decalibron-2021',
      'mount-elbert-2019',
      'mount-massive-2022',
      'mount-shavano-2021',
      'quandary-peak-2019',
    ].includes(item);
  });

  for (const folder of folders) {
    // await fs.unlink(`${input}/${folder}/data-new.json`, () => {});
    const images = [];
    let startingLocationForRootDataCoordinates = '';

    const rootData = JSON.parse(fs.readFileSync(`${input}/${folder}/data.json`, 'utf8'));

    const stageFolders = fs.readdirSync(`${input}/${folder}/stages`).filter((item) => {
      return !['.DS_Store'].includes(item);
    });

    for (const stageFolder of stageFolders) {
      await delay(1100);

      await fs.unlink(`${input}/${folder}/stages/${stageFolder}/post.md`, () => {});
      // todo once files look good
      // await fs.unlink(`${input}/${folder}/stages/${stageFolder}/data-new.json`, () => {});

      const stageData = JSON.parse(fs.readFileSync(`${input}/${folder}/stages/${stageFolder}/data.json`, 'utf8'));

      const title = stageData.termini.split(' to ')[1];

      const lookupLocation = `${title}, ${stageData.location}, ${rootData.location}, ${rootData.continent}`;

      if (stageFolder === '01') {
        startingLocationForRootDataCoordinates = lookupLocation;
      }

      const stageCoordinates = await getFormattedCoords(lookupLocation);

      writeFile(
        path.join(process.cwd(), `./repository/trails/${folder}/stages/${stageFolder}`),
        'data-new.json', // 'data.json', // todo once files look good
        JSON.stringify({
          date: stageData.date,
          termini: stageData.termini,
          location: stageData.location,
          coordinates: stageCoordinates,
          gain: stageData.gain,
          loss: stageData.loss,
          miles: stageData.miles,
          minutes: stageData.minutes
        }, null, 2),
      );

      images.push({
        src: stageData.image,
        title,
      });
    }

    await delay(1100);

    const rootDataCoordinates = await getFormattedCoords(startingLocationForRootDataCoordinates);

    if (images.length) {
      try {
        await fs.access(`${path.join(process.cwd(), './repository/albums')}/${folder}.json`);
      } catch {
        writeFile(
          path.join(process.cwd(), './repository/albums'),
          `${folder}.json`,
          JSON.stringify({
            date: rootData.dates,
            timestamp: rootData.timestamp,
            id: folder,
            title: rootData.title,
            location: rootData.location,
            coordinates: rootDataCoordinates,
            images,
          }, null, 2),
        );
      }
    }

    writeFile(
      path.join(process.cwd(), `./repository/trails/${folder}`),
      'data-new.json', // 'data.json', // todo once files look good
      JSON.stringify({
        date: rootData.dates,
        days: rootData.days,
        timestamp: rootData.timestamp,
        id: folder,
        albumId: folder,
        type: rootData.type,
        continent: rootData.continent,
        location: rootData.location,
        coordinates: rootDataCoordinates,
        position: rootData.position,
        title: rootData.title,
        description: rootData.description,
        tags: rootData.tags
      }, null, 2),
    );
  }
}

go();
