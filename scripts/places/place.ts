/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

function getLabel(type: string) {
  if (type === 'overnight trek' || type === 'thru-hike') {
    return 'Stage';
  }

  if (type === 'section hike') {
    return 'Section';
  }

  if (type === 'summit') {
    return 'Summit';
  }

  if (type === 'destination') {
    return 'Destination';
  }

  return '';
};

function getYear(dates: string[]) {
  const key = dates.length > 1 ? 1 : 0;
  const parts = dates[key].split('/');

  return `${parts[parts.length - 1]}${dates.length > 1 ? '' : '+'}`;
};

function getDateRange(dates: string[]) {
  const start = parseDate(dates[0], 'M/dd/yyyy', new Date());
  const year = formatDate(start, 'yyyy').trim();

  if (dates.length > 1) {
    const end = parseDate(dates[1], 'M/dd/yyyy', new Date());

    const monthA = formatDate(start, 'LLL');
    const monthB = formatDate(end, 'LLL');

    const yearA = formatDate(start, 'yyyy').trim();
    const yearB = formatDate(end, 'yyyy').trim();

    const doMonthsMatch = monthA === monthB;
    const doYearsMatch = yearA === yearB;

    const range = [
      [
        monthA,
        ` ${formatDate(start, 'do')}`,
        doYearsMatch ? false : `, ${yearA}`,
      ].filter(Boolean).join(''),
      [
        doMonthsMatch ? false : monthB,
        `${doMonthsMatch ? '' : ' '}${formatDate(end, 'do')}`,
        doYearsMatch ? `, ${yearA}` : `, ${yearB}`,
      ].filter(Boolean).join(''),
    ];

    return `${range[0].split(',')[0].trim()} to ${range[1]}`;
  }

  return getYear(dates);
};

export async function compile(input: string) {
  const data = JSON.parse(fs.readFileSync(`${input}/data.json`, 'utf8'));

  return {
    continent: data.continent,
    date: getDateRange(data.dates),
    description: data.description,
    id: data.id,
    label: getLabel(data.type),
    location: data.location,
    position: data.position,
    title: data.title,
    type: data.type,
    year: getYear(data.dates),
  };
};
