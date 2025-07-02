// @ts-nocheck

import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import { parse } from 'csv-parse';
import { TZDate } from '@date-fns/tz';
import { format as formatDate, parse as parseDate, getTime } from 'date-fns';
import _ from 'lodash';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const trips = path.join(process.cwd(), './repository/trips');
const output = path.join(process.cwd(), './src/data');

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
  let output = [];

  for (let category in categories) {
    output.push({
      category,
      items: categories[category],
      weight: calculateWeight(categories[category]),
    });
  }

  return output;
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
      items,
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
      ? coordinates.filter((_, index) => index % 3 === 2)
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

/* DETAILS */

async function getStages(trip) {
  if (!fs.existsSync(`${trips}/${trip}/stages`)) {
    return null;
  }

  const folders = fs.readdirSync(`${trips}/${trip}/stages`).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const stages = [];

  await Promise.all(
    folders.map(async (folder) => {
      const data = JSON.parse(fs.readFileSync(
        path.join(trips, `${trip}/stages/${folder}/data.json`),
        'utf8',
      ));

      const { elevation, route } = await parseGpx(`${trip}/stages/${folder}`);

      stages.push({
        ...data,
        route,
        elevation,
      });
    }),
  );

  return stages;
}

function calculateMaxAltitude(stages) {
  const altitudes = [];

  stages.forEach((stage) => {
    altitudes.push(
      Math.max(...stage.elevation)
    );
  });

  return Math.max(...altitudes).toFixed(0);
}

function calculateMinAltitude(stages) {
  const altitudes = [];

  stages.forEach((stage) => {
    altitudes.push(
      Math.min(...stage.elevation)
    );
  });

  return Math.min(...altitudes).toFixed(0);
}

function calculateElevationGain(stages) {
  const totalGain = stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.gain);
  }, 0);

  return totalGain;
}

function calculateElevationLoss(stages) {
  const totalLoss = stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.loss);
  }, 0);

  return totalLoss;
}

function calculateAverageElevationGain(stages) {
  const totalGain = stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.gain);
  }, 0);

  return totalGain / stages.length;
}

function calculateAverageElevationLoss(stages) {
  const totalLoss = stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.loss);
  }, 0);

  return totalLoss / stages.length;
}

function calculateTotalDistance(stages) {
  return stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.miles);
  }, 0);
}

function calculateAverageDistance(stages) {
  const avg = stages.reduce((accumulator, stage) => {
    return accumulator + Number(stage.miles);
  }, 0);

  return avg / stages.length;
}

function calculateLongestDistance(stages) {
  const distances = stages.map(({ miles }) => Number(miles));

  return Math.max(...distances);
}

function calculateShortestDistance(stages) {
  const distances = stages.map(({ miles }) => Number(miles));

  return Math.min(...distances);
}

function calculateAverageTime(stages) {
  let minutes = 0;

  stages.forEach((stage) => {
    minutes += ((Number(stage.time.hours) * 60) + Number(stage.time.minutes));
  });

  minutes = minutes / stages.length;

  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  };
}

function calculateShortestTime(stages) {
  let minutes = [];

  stages.forEach((stage) => {
    minutes.push(
      ((Number(stage.time.hours) * 60) + Number(stage.time.minutes))
    );
  });

  minutes = Math.min(...minutes);

  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  };
}

function calculateLongestTime(stages) {
  let minutes = [];

  stages.forEach((stage) => {
    minutes.push(
      ((Number(stage.time.hours) * 60) + Number(stage.time.minutes))
    );
  });

  minutes = Math.max(...minutes);

  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  };
}

async function getTripStats(trip, stages) {
  return [
    {
      type: 'max-altitude',
      value: stages ? calculateMaxAltitude(stages) : null,
    },
    {
      type: 'min-altitude',
      value: stages ? calculateMinAltitude(stages) : null,
    },
    {
      type: 'total-gain',
      value: stages ? calculateElevationGain(stages).toFixed(0) : null,
    },
    {
      type: 'total-loss',
      value: stages ? calculateElevationLoss(stages).toFixed(0) : null,
    },
    {
      type: 'average-%-gain',
      value: stages ? calculateAverageElevationGain(stages).toFixed(0) : null,
    },
    {
      type: 'average-%-loss',
      value: stages ? calculateAverageElevationLoss(stages).toFixed(0) : null,
    },
    {
      type: 'total-distance',
      value: stages ? calculateTotalDistance(stages).toFixed(1) : null,
    },
    {
      type: 'average-%-distance',
      value: stages ? calculateAverageDistance(stages).toFixed(1) : null,
    },
    {
      type: 'smallest-%-distance',
      value: stages ? calculateShortestDistance(stages).toFixed(1) : null,
    },
    {
      type: 'largest-%-distance',
      value: stages ? calculateLongestDistance(stages).toFixed(1) : null,
    },
    {
      type: 'total-time',
      value: { days: stages ? stages.length : trip.time.days },
    },
    {
      type: 'average-%-time',
      value: stages ? calculateAverageTime(stages) : null,
    },
    {
      type: 'shortest-%-time',
      value: stages ? calculateShortestTime(stages) : null,
    },
    {
      type: 'longest-%-time',
      value: stages ? calculateLongestTime(stages) : null,
    },
  ];
}

function filterAndGroupNested(items, printIdToMatch) {
  // 1. Filter the items by the given printId
  const filteredItems = items.filter(item => item.printId === printIdToMatch);

  // 2. Group the filtered items recursively by style, size, and then color
  const result = {};
  filteredItems.forEach(item => {
    const styleKey = item.style.replace('Framed with Mat', 'framed-with-mat').toLowerCase();
    const sizeKey = item.size.replace('"', '').replace('"', '').replace(' x ', 'x');
    const colorKey = item.color?.toLowerCase(); // Use color value as key if available

    if (!result[styleKey]) {
      result[styleKey] = {};
    }

    if (!result[styleKey][sizeKey]) {
      result[styleKey][sizeKey] = {};
    }

    // Determine the final key for the nested object
    const finalKey = item.colorId ? colorKey : 'noColor'; // Use a default key if colorId doesn't exist

    if (!result[styleKey][sizeKey][finalKey]) {
      // Create the structure with the final object
      result[styleKey][sizeKey][finalKey] = {
        id: item.id // Assign colorId or sizeId to the "id" key
      };
    }
    // You could also add other properties from the item here if needed
    // For example:
    result[styleKey][sizeKey][finalKey].price = item.price;
  });

  return result;
}

/* GO */

async function go() {
  const tripFolders = fs.readdirSync(trips).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const tripsTable = [];
  const tripCatgoriesTable = [];
  const tripGearTable = [];
  const tripStatsTable = [];
  const tripItinerarysTable = [];
  const tripStagesTable = [];
  const tripStagesElevationsTable = [];
  const tripStagesRoutesTable = [];
  const tripStagesStatsTable = [];

  await Promise.all(
    tripFolders.map(async (tripFolder) => {
      const tripData = JSON.parse(fs.readFileSync(
        path.join(trips, `${tripFolder}/data.json`),
        'utf8',
      ));

      const tripId = tripData.id;

      const tripGear = await parseCsv(tripFolder);

      const tripStages = await getStages(tripFolder);

      const tripStats = await getTripStats(tripData, tripStages);

      tripsTable.push({
        id: tripId,
        title: tripData.title,
        type: tripData.type,
        image: tripData.image,
        date: tripData.date,
        year:
          tripData.date.toLowerCase().includes('since')
            ? `${tripData.date.toLowerCase().replace('since ', '')} - ${formatDate(new Date(), 'yyyy')}`
            : tripData.date.split(',')[1].trim(),
        timestamp: getTime(
            new TZDate(
              parseDate(
                tripData.timestamp,
                'MMMM do, yyyy',
                new Date()
              ),
              'America/Chicago'
            )
          ) / 1000,
        description: Array.isArray(tripData.description) ? tripData.description : [tripData.description],
        coordinates: tripData.marker,
        lodging: tripData.lodging,
        location: tripData.location,
        direction: tripData.direction,
        next: tripData.next,
        previous: tripData.previous,
      });

      tripData.categories.forEach((category) => {
        tripCatgoriesTable.push({
          id: generateId(),
          tripId,
          name: category,
        });
      });

      if (tripGear) {
        tripGearTable.push({
          id: generateId(),
          tripId,
          ...tripGear,
        });
      }

      if (tripData.itinerary) {
        tripItinerarysTable.push({
          id: generateId(),
          tripId,
          itinerary: tripData.itinerary,
        });
      }

      if (tripStats) {
        tripStats.forEach((stat) => {
          tripStatsTable.push({
            id: generateId(),
            tripId,
            ...stat,
          });
        });
      }

      if (tripStages) {
        tripStages.forEach((tripStage) => {
          const tripStageId = generateId();

          tripStagesTable.push({
            id: tripStageId,
            tripId,
            title: tripStage.title,
            description: tripStage.description,
            date: tripStage.date,
            image: tripStage.image,
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'total-time',
            value: tripStage.time,
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'total-distance',
            value: tripStage.miles,
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'total-gain',
            value: tripStage.gain,
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'total-loss',
            value: tripStage.loss,
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'max-altitude',
            value: Math.max(...tripStage.elevation).toFixed(0),
          });

          tripStagesStatsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            type: 'min-altitude',
            value: Math.min(...tripStage.elevation).toFixed(0),
          });

          tripStagesElevationsTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            values: tripStage.elevation,
          });

          tripStagesRoutesTable.push({
            id: generateId(),
            tripId,
            tripStageId,
            values: tripStage.route,
          });
        });
      }
    }),
  );

  if (tripsTable.length) {
    writeData('trips.js', tripsTable);
  }

  if (tripCatgoriesTable.length) {
    writeData('trip-categories.js', tripCatgoriesTable);
  }

  if (tripGearTable.length) {
    writeData('trip-gear.js', tripGearTable);
  }

  if (tripStatsTable.length) {
    writeData('trip-stats.js', tripStatsTable);
  }

  if (tripItinerarysTable.length) {
    writeData('trip-itineraries.js', tripItinerarysTable);
  }

  if (tripStagesTable.length) {
    writeData('trip-stages.js', tripStagesTable);
  }

  if (tripStagesElevationsTable.length) {
    writeData('trip-stages-elevations.js', tripStagesElevationsTable);
  }

  if (tripStagesRoutesTable.length) {
    writeData('trip-stages-routes.js', tripStagesRoutesTable);
  }

  if (tripStagesStatsTable.length) {
    writeData('trip-stages-stats.js', tripStagesStatsTable);
  }
}

go();
