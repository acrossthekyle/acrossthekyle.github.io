// @ts-nocheck

import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import { parse } from 'csv-parse';
import { TZDate } from '@date-fns/tz';
import { format as formatDate, parse as parseDate } from 'date-fns';
import _ from 'lodash';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const trips = path.join(process.cwd(), './repository');
const output = path.join(process.cwd(), './src/app/api');

/* UTILITY METHODS */

function generateId() {
  const timestamp = new Date().getTime().toString();
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 15; ++i) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    result += characters.charAt(randomIndex);
  }

  return result;
}

async function createDirectory(destination) {
  try {
    await fs.readdirSync(destination);
  } catch (e) {
    await fs.mkdirSync(destination);
  }
}

async function writeFile(destination, filename, content) {
  createDirectory(destination);

  await fs.writeFile(`${destination}/${filename}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log(`wrote ${destination}/${filename}`);
  });
}

async function writeData(destination, data) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(output, destination, json);
}

/* CSV */

function calculateWeight(items) {
  const total = [...items].reduce((sum, item) => sum + item.weight, 0);

  return (total / 16).toFixed(2);
}

function calculateBaseWeight(items) {
  return calculateWeight(
    [...items].filter((item) => !item.worn && !item.consumable),
  );
}

function calculateWornWeight(items) {
  return calculateWeight([...items].filter((item) => item.worn));
}

function calculateConsumableWeight(items) {
  return calculateWeight([...items].filter((item) => item.consumable));
}

function calculateWeightPerCategory(categories) {
  let result = [];

  for (let category in categories) {
    result.push({
      category,
      items: categories[category],
      weight: calculateWeight(categories[category]),
    });
  }

  return result;
}

function groupByCategory(items) {
  return [...items].reduce((accumulator, current) => {
    let key = current['category']
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(current);

    return accumulator;
  }, {});
}

async function parseCsv(folder) {
  const filePath = path.join(trips, `${folder}/gear.csv`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const parser = fs
      .createReadStream(filePath)
      .pipe(
        parse({
          columns: true,
          skip_empty_lines: true,
        }),
      );

    const items = [];

    for await (const item of parser) {
      items.push({
        ...item,
        consumable: item.consumable === 'yes',
        weight: Number(item.weight),
        worn: item.worn === 'yes',
      });
    }

    return {
      categories: calculateWeightPerCategory(groupByCategory(items)),
      weightBase: calculateBaseWeight(items),
      weightConsumable: calculateConsumableWeight(items),
      weightTotal: calculateWeight(items),
      weightWorn: calculateWornWeight(items),
    };
  } catch (e) {
    return null;
  }
}

/* GPX */

function parseGpxCoordinates(gpx) {
  const coordinates = [];

  gpx.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        coordinates.push(coordinate);
      }
    });
  });

  const filtered = (
    coordinates.length > 2000
      ? coordinates.filter((coordinate, index) => index % 3 === 2)
      : coordinates
    );

  const elevations = filtered
    .filter((coordinate) => coordinate[2] !== null)
    .map((coordinate) => (coordinate[2] * 3.281).toFixed(0));

  const minVal = Math.min(...elevations);
  const maxVal = Math.max(...elevations);
  const indices = [elevations.indexOf(minVal), elevations.indexOf(maxVal)];
  const targetSize = 150;

  const step = (elevations.length - 1) / (targetSize - 1);

  for (let i = 1; i < targetSize - 1; i++) {
    let index = Math.round(i * step);

    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  indices.sort((a, b) => a - b);

  const elevation = indices
    .filter((index) => index >= 0)
    .map(index => elevations[index]);

  return {
    elevation,
    route: filtered
      .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
      .map((coordinate) => [coordinate[1], coordinate[0]]),
  };
}

async function parseGpx(folder: string) {
  if (!fs.existsSync(path.join(trips, `${folder}/route.gpx`))) {
    return {
      elevation: null,
      route: null,
    };
  }

  const xml = await fsPromises.readFile(
    path.join(trips, `${folder}/route.gpx`),
    'utf-8',
  );

  const parsed = gpx(new DOMParser().parseFromString(xml, 'text/xml'));

  if (parsed) {
    const { elevation, route } = parseGpxCoordinates(parsed);

    return {
      elevation,
      route,
    }
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
}

/* DETAILS */

async function getStages(folder) {
  if (!fs.existsSync(`${trips}/${folder}/stages`)) {
    return null;
  }

  const folders = fs.readdirSync(`${trips}/${folder}/stages`)
    .filter((directory) => {
      if (directory !== '.DS_Store') {
        return directory;
      }
    });

  const stages = [];

  await Promise.all(
    folders.map(async (stageFolder) => {
      const data = JSON.parse(fs.readFileSync(
        path.join(trips, `${folder}/stages/${stageFolder}/data.json`),
        'utf8',
      ));

      const { elevation, route } = await parseGpx(`${folder}/stages/${stageFolder}`);

      let stats = {
        distance: null,
        gain: null,
        loss: null,
        max: null,
        time: null,
      };

      if (data.gain) {
        stats.gain = {
          label: 'gain',
          value: formatNumber(data.gain),
          units: 'ft',
        };
      }

      if (data.loss) {
        stats.loss = {
          label: 'loss',
          value: formatNumber(data.loss),
          units: 'ft',
        };
      }

      if (data.miles) {
        stats.distance = {
          label: 'distance',
          value: formatNumber(Number(data.miles).toFixed(2)),
          units: 'miles',
        };
      }

      if (data.minutes) {
        stats.time = {
          label: 'time',
          value: (data.minutes / 60).toFixed(1),
          units: 'hours',
        };
      }

      if (elevation) {
        stats.max = {
          label: 'altitude',
          value: formatNumber(Math.max(...elevation).toFixed(0)),
          units: 'ft',
        };
      }

      stages.push({
        date: data.date,
        elevation,
        hasStats: stats !== null,
        id: generateId(),
        images: {
          hero: data.image,
        },
        index: null,
        latlong: data.latlong,
        next: null,
        previous: null,
        route,
        slug: _.kebabCase(data.title),
        stats,
        termini: {
          end: getTermini(data.title, 1),
          start: getTermini(data.title, 0),
        },
        title: data.title,
      });
    }),
  );

  const sorted = stages.sort(
    (a, b) =>
      parseDate(a.date, 'MMMM do, yyyy', new Date()).getTime() -
      parseDate(b.date, 'MMMM do, yyyy', new Date()).getTime(),
  );

  const result = sorted.map((item, index) => {
    return {
      ...item,
      index,
      previous: index === 0 ? null : sorted[index - 1].slug,
      next: index === sorted.length - 1 ? null : sorted[index + 1].slug,
    };
  });

  return result;
}

function calculateAltitude(stages) {
  const altitudes = [];

  stages.forEach((stage) => {
    if (stage.elevation) {
      altitudes.push(
        Math.max(...stage.elevation)
      );
    }
  });

  return altitudes.length > 0 ? Math.max(...altitudes).toFixed(0) : null;
}

function calculateDistance(stages) {
  const distance = stages.reduce((accumulator, stage) => {
    const miles = stage.stats.distance;

    if (miles) {
      return accumulator + Number(miles.value);
    }

    return accumulator;
  }, 0);

  return distance > 0 ? distance : null;
}

async function getTripStats(trip, stages) {
  const altitude = calculateAltitude(stages);
  const distance = calculateDistance(stages);

  let stats = {
    altitude: null,
    distance: null,
    days: {
      label: 'days',
      value: trip.days,
      units: null,
    },
    length: {
      label: 'length',
      value: stages.length,
      units: null,
    },
  };

  if (altitude !== null) {
    stats.altitude = {
      label: 'altitude',
      value: formatNumber(altitude),
      units: 'ft',
    };
  }

  if (distance !== null) {
    stats.distance = {
      label: 'distance',
      value: formatNumber(distance.toFixed(0)),
      units: 'miles',
    };
  }

  return stats;
}

async function getTripDate(trip, stages) {
  const start = parseDate(trip.dates[0], 'M/dd/yyyy', new Date());
  const year = [formatDate(start, 'yyyy')];

  let dates = null;

  if (trip.dates.length > 1) {
    const end = parseDate(trip.dates[1], 'M/dd/yyyy', new Date());

    dates = {
      start: {
        long: {
          month: formatDate(start, 'LLLL'),
          day: formatDate(start, 'do'),
          year: formatDate(start, 'yyyy'),
        },
        short: {
          month: formatDate(start, 'LLL'),
          day: formatDate(start, 'd'),
          year: formatDate(start, 'yy'),
        },
      },
      end: {
        long: {
          month: formatDate(end, 'LLLL'),
          day: formatDate(end, 'do'),
          year: formatDate(end, 'yyyy'),
        },
        short: {
          month: formatDate(end, 'LLL'),
          day: formatDate(end, 'd'),
          year: formatDate(end, 'yy'),
        },
      },
    };
  }

  if (dates === null) {
    year.push(stages[stages.length - 1].date.split(',')[1]);
  }

  return {
    dates,
    year,
  };
}

function getLabel(type) {
  if (type === 'thru-hike') {
    return 'day';
  }

  if (type === 'section-hike') {
    return 'section';
  }

  if (type === 'peak-bagging') {
    return 'summit';
  }

  if (type === 'vacation') {
    return 'destination';
  }

  return '';
}

function getTermini(string, index) {
  return string.includes(' to ') ? string.split(' to ')[index] : string;
}

async function getTripTermini(trip, stages) {
  const termini = {
    end: trip.cities ? trip.cities[trip.cities.length - 1] : stages[stages.length - 1].title,
    start: trip.cities ? trip.cities[0] : stages[0].title,
  };

  const end = getTermini(termini.end, 1);
  const start = getTermini(termini.start, 0);

  return {
    end,
    isSame: start.toLowerCase() === end.toLowerCase(),
    start,
  }
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // A common bitwise operation for hashing
    hash |= 0; // Ensure 32-bit integer
  }
  // Convert to base 36 for a shorter, alphanumeric string
  return (hash >>> 0).toString(36);
}

/* GO */

async function go() {
  const folders = fs.readdirSync(trips).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const data = [];

  await Promise.all(
    folders.map(async (folder) => {
      const trip = JSON.parse(fs.readFileSync(
        path.join(trips, `${folder}/data.json`),
        'utf8',
      ));

      const gear = await parseCsv(folder);
      const stages = await getStages(folder);
      const stats = await getTripStats(trip, stages);
      const date = await getTripDate(trip, stages);
      const termini = await getTripTermini(trip, stages);

      const hasRoutes = stages.filter(stage => stage.route).length > 0;
      const hasLatlong = stages.filter(stage => stage.latlong).length > 0;

      const slug = _.kebabCase(trip.title);

      data.push({
        categories: trip.categories,
        cities: trip.cities,
        coordinates: trip.marker,
        date,
        description: trip.description,
        gear,
        hasGear: gear !== null,
        hasLatlong,
        hasRoutes,
        id: generateId(),
        images: {
          hero: trip.image,
          small: trip.previews.small,
          large: trip.previews.large,
        },
        index: null,
        label: getLabel(trip.type),
        latlong: hasLatlong ? stages.map(stage => stage.latlong) : null,
        location: trip.location,
        next: null,
        previous: null,
        routes: hasRoutes ? stages.map(stage => stage.route) : null,
        shareable: simpleHash(slug),
        slug,
        stages: stages.map(({ elevation, route, ...rest }) => ({
          ...rest,
        })),
        stats,
        tagline: trip.tagline,
        termini,
        timestamp: trip.timestamp,
        title: trip.title,
        total: folders.length,
        type: trip.type,
      });
    }),
  );

  if (data.length) {
    const sorted = data.sort((a, b) => b.timestamp - a.timestamp);

    const result = sorted.map((item, index) => {
      return {
        ...item,
        index,
        next: index === 0 ? sorted[sorted.length - 1].slug : sorted[index - 1].slug,
        previous: index === sorted.length - 1 ? sorted[0].slug : sorted[index + 1].slug,
      };
    });

    writeData('data.js', result);
  }
}

go();
