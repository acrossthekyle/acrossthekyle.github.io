import photos from '@/db/photos';
import places from '@/db/places';

import {
  combineTermini,
  padIndex,
} from '../../../../../utils';

import type { Data } from './types';

function getPhotosItem(page: string, slug: string, index: string) {
  const found = photos.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > photos.length - 1) {
    return null;
  }

  const result = photos[key];

  const next = key === photos.length - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    date: result.date,
    hasNavigation: next !== null || previous !== null,
    location: result.location,
    next: next ? `${page}/${photos[next - 1].slug}/${padIndex(next)}/${photos[next - 1].src}` : '',
    place: 'Photos',
    previous: previous ? `${page}/${photos[previous - 1].slug}/${padIndex(previous)}/${photos[previous - 1].src}` : '',
    slug,
    title: '',
    total: padIndex(photos.length),
  };
}

function getPlacesItem(page: string, slug: string, index: string) {
  const found = places.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > found.stages.length - 1) {
    return null;
  }

  const result = found.stages[key];

  const next = key === found.stages.length - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    date: result.date,
    hasNavigation: next !== null || previous !== null,
    location: [result.location, found.location].join(', '),
    next: next ? `${page}/${slug}/${padIndex(next)}/${found.stages[next - 1].image}` : '',
    place: found.title.join(' '),
    previous: previous ? `${page}/${slug}/${padIndex(previous)}/${found.stages[previous - 1].image}` : '',
    title: combineTermini(result.termini),
    total: padIndex(found.stages.length),
  };
}

export default function get(
  page: string,
  path: string[],
  slug: string,
  index: string,
): Data | null {
  const data = page === 'photos'
    ? getPhotosItem(page, slug, index)
    : getPlacesItem(page, slug, index);

  if (data === undefined) {
    return null;
  }

  return {
    ...data,
    index,
    page,
    src: path.join('/'),
    slug,
  } as Data;
};
