/* eslint-disable */
// @ts-nocheck

import { gpx as parseGpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const STAT_FALLBACK = {
  imperial: '',
  metric: '',
};

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

function reduceElevation(data) {
  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const indices = [data.indexOf(minVal), data.indexOf(maxVal)];
  const targetSize = 200;

  const step = (data.length - 1) / (targetSize - 1);

  for (let i = 1; i < targetSize - 1; i++) {
    let index = Math.round(i * step);

    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  indices.sort((a, b) => a - b);

  const result = indices
    .filter((index) => index >= 0)
    .map(index => data[index]);

  return result;
};

function getElevation(data) {
  const items = [];

  data.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((item) => {
      if (Array.isArray(item)) {
        items.push(item);
      }
    });
  });

  const filtered = (
    items.length > 2000
      ? items.filter((_, index) => index % 3 === 2)
      : items
    );

  return reduceElevation(
    filtered
      .filter((item) => item[2] !== null)
      .map((item) => {
        return Number((item[2] * 3.281).toFixed(0));
      }),
  );
};

function getTermini(termini: string, index: number) {
  return termini.includes(' to ') ? termini.split(' to ')[index] : termini;
};

function getBeginning(start) {
  return {
    label: 'Start',
    value: {
      basic: start,
      complex: {
        imperial: '',
        metric: '',
      },
    },
  };
};

function getEnding(end) {
  return {
    label: 'End',
    value: {
      basic: end,
      complex: {
        imperial: '',
        metric: '',
      },
    },
  };
};

function getDistance(type, data) {
  return {
    label: 'Distance',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(
          type === 'summit' ? data.miles / 2 : data.miles
        ),
        metric: formatNumber(Number(
          type === 'summit' ? data.miles / 2 : data.miles
        ) * 1.609),
      },
    },
  };
};

function getEnd(elevation) {
  const value = elevation[elevation.length - 1];

  return {
    label: 'Altitude end',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(Number(value) / 3.281),
      },
    },
  };
};

function getStart(elevation) {
  const value = elevation[0];

  return {
    label: 'Altitude start',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(Number(value) / 3.281),
      },
    },
  };
};

function getGain(data) {
  return {
    label: 'Elevation gain',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(data.gain),
        metric: formatNumber(Number(data.gain) / 3.281),
      },
    },
  };
};

function getLoss(data) {
  return {
    label: 'Elevation loss',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(data.loss),
        metric: formatNumber(Number(data.loss) / 3.281),
      },
    },
  };
};

function getMax(elevation) {
  const value = Math.max(...elevation);

  return {
    label: 'Max altitude',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(Number(value) / 3.281),
      },
    },
  };
};

function getTime(type, data) {
  const value = Math.ceil(
    (type === 'summit' ? data.minutes / 2 : data.minutes) / 60
  ).toFixed(0);

  return {
    label: 'Time',
    value: {
      basic: `${value} hours`,
      complex: {
        imperial: '',
        metric: '',
      },
    },
  };
};

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
      const route = path.join(input, `${folder}/route.gpx`);
      const data = JSON.parse(fs.readFileSync(path.join(input, `${folder}/data.json`), 'utf8'));

      if (fs.existsSync(route)) {
        const xml = await fsPromises.readFile(route, 'utf-8');

        const parsed = parseGpx(new DOMParser().parseFromString(xml, 'text/xml'));

        if (parsed) {
          const elevation = getElevation(parsed);

          const start = getTermini(data.termini, 0);
          const end = getTermini(data.termini, 1);

          output.push({
            id: folder,
            placeId: place.id,
            beginning: getBeginning(start),
            distance: getDistance(place.type, data),
            elevation,
            end: getEnd(elevation),
            ending: getEnding(end),
            gain: getGain(data),
            loss: getLoss(data),
            max: getMax(elevation),
            start: getStart(elevation),
            time: getTime(place.type, data),
          });
        }
      }
    }),
  );

  return output;
};
