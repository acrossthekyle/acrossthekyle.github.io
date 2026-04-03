/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import { gpx as parseGpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

import { reduceCoordinates } from '../utils';

const STAT_FALLBACK = {
  imperial: '',
  metric: '',
};

function getWhen(date) {
  let value = date;
  let format = 'MMMM do, yyyy';

  if (Array.isArray(date)) {
    value = date[0];
    format = 'M/dd/yyyy';
  }

  const start = parseDate(value, format, new Date());

  const day = formatDate(start, 'dd').trim();
  const month = formatDate(start, 'MM').trim();
  const year = formatDate(start, 'yy').trim();

  return `${month} ${day} 20${year}`;
};

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

function reduceDataPoints(data) {
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

function getDataPoints(data) {
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

  return reduceDataPoints(
    filtered
      .filter((item) => item[2] !== null)
      .map((item) => ({
        elevation: Number((item[2] * 3.281).toFixed(0)),
        lat: item[1],
        long: item[0],
      })),
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

export async function compile(folder, trail) {
  const route = `${folder}/route.gpx`;
  const data = JSON.parse(fs.readFileSync(`${folder}/data.json`, 'utf8'));
  const index = Number(folder.split('/').pop());

  if (fs.existsSync(route)) {
    const xml = await fsPromises.readFile(route, 'utf-8');

    const parsed = parseGpx(new DOMParser().parseFromString(xml, 'text/xml'));

    if (parsed) {
      const dataPoints = getDataPoints(parsed);

      const elevation = dataPoints.map((dataPoint) => dataPoint.elevation);

      const start = getTermini(data.termini, 0);
      const end = getTermini(data.termini, 1);

      return {
        altitudeEnd: getEnd(elevation),
        altitudeMax: getMax(elevation),
        altitudeStart: getStart(elevation),
        beginning: getBeginning(start),
        coordinates: reduceCoordinates(data.coordinates),
        distance: getDistance(trail.type, data),
        elevation,
        elevationGain: getGain(data),
        elevationLoss: getLoss(data),
        ending: getEnding(end),
        hours: getTime(trail.type, data),
        index,
        latLong: dataPoints.map((dataPoint) => [dataPoint.lat, dataPoint.long]),
        location: data.location,
        termini: data.termini,
        when: getWhen(data.date),
      };
    }
  }

  return null;
};
