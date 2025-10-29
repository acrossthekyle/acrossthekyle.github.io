// @ts-nocheck

import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import { parse } from 'csv-parse';
import { TZDate } from '@date-fns/tz';
import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const trips = path.join(process.cwd(), './repository');
const output = path.join(process.cwd(), './src/db');

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

async function writeFile(destination, filename, content, silent = false) {
  createDirectory(destination);

  await fs.writeFile(`${destination}/${filename}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    if (!silent) {
      console.log(`wrote ${destination}/${filename}`);
    }
  });
}

async function writeData(destination, data) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(output, destination, json);
}

function turnStringIntoArrayForLists(value: string, limit = 12) {
  const parts = value.split(' ');
  let result = [''];
  let index = 0;

  parts.forEach((part: string) => {
    if (result[index].length < limit) {
      const combination = `${result[index]} ${part.trim()}`.trim();

      if (combination.length < limit) {
        result.splice(index, 1, combination);
      } else if (part.length > limit ) {
        result.splice(index, 1, part.trim());
      } else {
        ++index

        result.splice(index, 1, part.trim());
      }
    }
  });

  return result;
}

/* GEAR */

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
  let results = [];

  for (let category in categories) {
    results.push({
      title: category,
      items: categories[category].map(({ link, name, weight }) => ({
        link,
        name,
        weight,
      })),
      // weight: calculateWeight(categories[category]),
    });
  }

  return results;
}

function groupByCategory(items) {
  const grouped = [...items].reduce((accumulator, current) => {
    let key = current.category
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push({
      link: current.link,
      name: current.name,
      weight: current.weight,
    });

    return accumulator;
  }, {});

  const results = [];

  for (let category in grouped) {
    results.push({
      title: category,
      items: grouped[category],
    });
  }

  return results;
}

async function getGear(folder) {
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
        category: item.category,
        link: item.link,
        name: turnStringIntoArrayForLists(`${item.name} ${item.type}`.trim()),
        // consumable: item.consumable === 'yes',
        weight: Number(item.weight),
        // worn: item.worn === 'yes',
      });
    }

    return {
      categories: groupByCategory(items),
      // weightBase: calculateBaseWeight(items),
      // weightConsumable: calculateConsumableWeight(items),
      // weightTotal: calculateWeight(items),
      // weightWorn: calculateWornWeight(items),
    };
  } catch (e) {
    return null;
  }
}

/* GPX */

function reduceGpxData(data) {
  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const indices = [data.indexOf(minVal), data.indexOf(maxVal)];
  const targetSize = 150;

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
}

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

  const elevation = filtered
    .filter((coordinate) => coordinate[2] !== null)
    .map((coordinate) => (coordinate[2] * 3.281).toFixed(0));

  const route = filtered
    .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
    .map((coordinate) => [coordinate[1], coordinate[0]]);

  return {
    elevation: reduceGpxData(elevation),
    route: reduceGpxData(route),
  };
}

async function parseGpx(folder: string) {
  if (!fs.existsSync(path.join(trips, `${folder}/route.gpx`))) {
    return {
      elevation: undefined,
      route: undefined,
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

async function parseMd(folder) {
  if (!fs.existsSync(path.join(trips, `${folder}/post.md`))) {
    return {
      description: undefined,
      readingTime: undefined,
    };
  }

  const md = fs.readFileSync(
    path.join(trips, `${folder}/post.md`),
    'utf-8',
  );

  const { content } = matter(md);

  return {
    description: content.split(/\n\n/),
    readingTime: Math.ceil(readingTime(content).minutes).toFixed(0),
  };
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

      const { description, readingTime } = await parseMd(`${folder}/stages/${stageFolder}`);

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
          value: {
            imperial: formatNumber(data.gain),
            metric: formatNumber(data.gain/3.281),
          },
          units: {
            imperial: {
              full: 'feet',
              abbreviated: 'ft',
            },
            metric: {
              full: 'meters',
              abbreviated: 'm',
            },
          },
        };
      }

      if (data.loss) {
        stats.loss = {
          label: 'loss',
          value: {
            imperial: formatNumber(data.loss),
            metric: formatNumber(data.loss/3.281),
          },
          units: {
            imperial: {
              full: 'feet',
              abbreviated: 'ft',
            },
            metric: {
              full: 'meters',
              abbreviated: 'm',
            },
          },
        };
      }

      if (data.miles) {
        stats.distance = {
          label: 'distance',
          value: {
            imperial: formatNumber(Number(data.miles)),
            metric: formatNumber(Number(data.miles) * 1.609),
          },
          units: {
            imperial: {
              full: 'miles',
              abbreviated: 'mi',
            },
            metric: {
              full: 'kilometers',
              abbreviated: 'km',
            },
          },
        };
      }

      if (data.minutes) {
        stats.time = {
          label: 'time',
          value: Math.ceil(data.minutes / 60).toFixed(0),
          units: 'hours',
        };
      }

      if (elevation) {
        stats.max = {
          label: 'altitude',
          value: {
            imperial: formatNumber(Math.max(...elevation)),
            metric: formatNumber(Math.max(...elevation)/3.281),
          },
          units: {
            imperial: {
              full: 'feet',
              abbreviated: 'ft',
            },
            metric: {
              full: 'meters',
              abbreviated: 'm',
            },
          },
        };
      }

      const end = getTermini(data.title, 1);
      const start = getTermini(data.title, 0);

      stages.push({
        date: data.date,
        description: description || [],
        elevation: elevation || null,
        hasElevation: elevation !== undefined,
        hasRoute: route !== undefined,
        hasStats: !Object.values(stats).every(value => value === null),
        image: data.image,
        index: null,
        location: data.location || null,
        readingTime: readingTime || null,
        route: route || null,
        stats,
        termini: {
          end: turnStringIntoArrayForLists(end, 16),
          isSame: start.toLowerCase() === end.toLowerCase(),
          start: turnStringIntoArrayForLists(start, 16),
        },
        title: turnStringIntoArrayForLists(data.title, 16),
      });
    }),
  );

  const sorted = stages.sort(
    (a, b) =>
      parseDate(`${a.date}`, 'MMMM do, yyyy', new Date()).getTime() -
      parseDate(`${b.date}`, 'MMMM do, yyyy', new Date()).getTime(),
  );

  const result = sorted.map((item, index) => {
    return {
      ...item,
      index,
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
    if (stage.stats.distance !== null) {
      return accumulator + Number(stage.stats.distance.value.imperial);
    }

    return accumulator;
  }, 0);

  return distance > 0 ? distance : null;
}

function calculateGain(stages) {
  const gain = stages.reduce((accumulator, stage) => {
    if (stage.stats.gain !== null) {
      return accumulator + Number(stage.stats.gain.value.imperial.replace(',', ''));
    }

    return accumulator;
  }, 0);

  return gain > 0 ? gain : null;
}

function calculateLoss(stages) {
  const loss = stages.reduce((accumulator, stage) => {
    if (stage.stats.loss !== null) {
      return accumulator + Number(stage.stats.loss.value.imperial.replace(',', ''));
    }

    return accumulator;
  }, 0);

  return loss > 0 ? loss : null;
}

async function getTripStats(trip, stages) {
  const altitude = calculateAltitude(stages);
  const distance = calculateDistance(stages);
  const gain = calculateGain(stages);
  const loss = calculateLoss(stages);

  let stats = {
    altitude: null,
    distance: null,
    gain: null,
    loss: null,
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

  if (gain !== null) {
    stats.gain = {
      label: 'gain',
      value: {
        imperial: formatNumber(gain),
        metric: formatNumber(gain/3.281),
      },
      units: {
        imperial: {
          full: 'feet',
          abbreviated: 'ft',
        },
        metric: {
          full: 'meters',
          abbreviated: 'm',
        },
      },
    };
  }

  if (loss !== null) {
    stats.loss = {
      label: 'loss',
      value: {
        imperial: formatNumber(loss),
        metric: formatNumber(loss/3.281),
      },
      units: {
        imperial: {
          full: 'feet',
          abbreviated: 'ft',
        },
        metric: {
          full: 'meters',
          abbreviated: 'm',
        },
      },
    };
  }

  if (altitude !== null) {
    stats.altitude = {
      label: 'altitude',
      value: {
        imperial: formatNumber(altitude),
        metric: formatNumber(altitude/3.281),
      },
      units: {
        imperial: {
          full: 'feet',
          abbreviated: 'ft',
        },
        metric: {
          full: 'meters',
          abbreviated: 'm',
        },
      },
    };
  }

  if (distance !== null) {
    stats.distance = {
      label: 'distance',
      value: {
        imperial: formatNumber(distance),
        metric: formatNumber(distance * 1.609),
      },
      units: {
        imperial: {
          full: 'miles',
          abbreviated: 'mi',
        },
        metric: {
          full: 'kilometers',
          abbreviated: 'km',
        },
      },
    };
  }

  return {
    hasStats: stats.gain !== null && stats.loss !== null && stats.altitude !== null && stats.distance !== null,
    stats,
  };
}

async function getTripDate(trip, stages) {
  const start = parseDate(trip.dates[0], 'M/dd/yyyy', new Date());
  const years = [formatDate(start, 'yyyy').trim()];

  let date = null;

  if (trip.dates.length > 1) {
    date = `${formatDate(start, 'LLL')} ${formatDate(start, 'd')} ${years}`;
  }

  if (date === null) {
    years.push(stages[stages.length - 1].date.split(',')[1].trim());
  }

  return {
    date,
    years,
  };
}

function getLabel(type) {
  if (type === 'trekking') {
    return 'day';
  }

  if (type === 'summits') {
    return 'summit';
  }

  if (type === 'destination') {
    return 'destination';
  }

  return '';
}

function getTermini(string, index) {
  return string.includes(' to ') ? string.split(' to ')[index] : string;
}

function formatDescription(trip, stats) {
  return trip.description.map((paragraph) => {
    paragraph = paragraph.replace('%length%', stats.length.value);
    paragraph = paragraph.replace('%location%', trip.location);

    if (stats.gain !== null) {
      paragraph = paragraph.replace('%gain%', `${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated}`);
    }

    if (stats.loss !== null) {
      paragraph = paragraph.replace('%loss%', `${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`);
    }

    if (stats.distance !== null) {
      paragraph = paragraph.replace('%distance%', `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`);
    }

    if (stats.altitude !== null) {
      paragraph = paragraph.replace('%max%', `${stats.altitude.value.imperial} ${stats.altitude.units.imperial.full}`);
    }

    if (stats.days !== null) {
      paragraph = paragraph.replace('%days%', `${stats.days.value} days`);
    }

    return paragraph;
  });
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

      const gear = await getGear(folder);
      const stages = await getStages(folder);
      const { hasStats, stats } = await getTripStats(trip, stages);
      const date = await getTripDate(trip, stages);

      data.push({
        date,
        description: formatDescription(trip, stats),
        gear: gear === null ? {} : gear,
        hasGear: gear !== null,
        hasStats,
        label: getLabel(trip.type),
        location: trip.location,
        slug: trip.id,
        stages: stages.map(({
          date,
          description,
          elevation,
          hasElevation,
          hasRoute,
          hasStats,
          image,
          location,
          readingTime,
          route,
          stats,
          termini,
        }) => ({
          date,
          description,
          elevation,
          hasElevation,
          hasRoute,
          hasStats,
          image,
          location,
          readingTime,
          route,
          stats,
          termini,
        })),
        stats: {
          altitude: stats.altitude,
          days: stats.days,
          distance: stats.distance,
          length: stats.length,
        },
        timestamp: trip.timestamp,
        title: turnStringIntoArrayForLists(trip.title),
        type: trip.type,
      });
    }),
  );

  if (data.length) {
    const sorted = data.sort((a, b) => b.timestamp - a.timestamp);

    const result = sorted.map(({ timestamp, ...rest }, index) => {
      return {
        ...rest,
      };
    });

    writeData('index.js', result);
  }
}

go();
