import { ROUTES } from './routes';
import type { Collection } from './types';

export function padIndex(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export function trimCardinal(value: string) {
  return value.replace(/\b(North|Northern|South|Southern|East|Eastern|West|Western)\b/gi, (match: string) => {
    return match.charAt(0).toUpperCase() + '.';
  });
};

export function createDescription(collection: Collection) {
  const { category, location, title, type } = collection;

  if (type === 'thru-hike') {
    return `A thru-hike in ${trimCardinal(location.continent)}`;
  }

  if (type === 'overnight-hike') {
    return `An overnight campout in ${location.region}`;
  }

  if (type === 'section-hike') {
    return `A log of completed sections on this long-distance trail — ${trimCardinal(location.country)}, ${trimCardinal(location.continent)}`;
  }

  if (type === 'summits') {
    return `A log of bagged alpine peaks in the ${location.region} of ${trimCardinal(location.continent)}`;
  }

  if (type === 'basecamp') {
    return `An out-and-back trek in ${location.region} of ${trimCardinal(location.country)}`;
  }

  if (category.toLowerCase() === 'cities') {
    const isMultiple = title.join('').includes('+');

    return `Visiting ${isMultiple ? 'some cities' : 'a city'} in ${location.region}, ${trimCardinal(location.country)}`;
  }

  if (category.toLowerCase() === 'destinations') {
    return `Exploring the sights of the ${location.region} of ${trimCardinal(location.country)}`;
  }

  return `An adventure in ${trimCardinal(location.country)}, ${trimCardinal(location.continent)}`;
};

export function getRoute(value: string) {
  const match = ROUTES.find(({ id, path }) => id === value.toLowerCase() || path === value.toLowerCase());

  if (match) {
    return match;
  }

  return {
    id: '404',
    name: 'Not Found',
    path: '/404',
    text: 'That page does not exist',
  };
}
