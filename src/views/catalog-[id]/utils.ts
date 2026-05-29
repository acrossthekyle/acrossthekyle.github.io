import type { Collection } from '@/types';
import { trimCardinal } from '@/utils';

export function formatHeader(data: Collection) {
  if (data.type === 'thru-hike') {
    return `A thru-hike in ${data.location.region} of ${data.location.country}`;
  }

  if (data.type === 'overnight-hike') {
    return `An overnight campout in ${data.location.region}`;
  }

  if (data.type === 'section-hike') {
    return `A log of completed sections on this long-distance trail — ${data.location.country}, ${trimCardinal(data.location.continent)}`;
  }

  if (data.type === 'summits') {
    return `A log of bagged alpine peaks in the ${data.location.region} of ${trimCardinal(data.location.continent)}`;
  }

  if (data.type === 'basecamp') {
    return `An out-and-back trek in ${data.location.region} of ${data.location.country}`;
  }

  if (data.category.toLowerCase() === 'cities') {
    const isMultiple = data.title.join('').includes('+');

    return `Visiting ${isMultiple ? 'some cities' : 'a city'} in ${data.location.region}, ${data.location.country}`;
  }

  if (data.category.toLowerCase() === 'destinations') {
    return `Exploring the sights of the ${data.location.region} of ${data.location.country}`;
  }

  return `An adventure from ${data.when} — ${data.location.country}, ${trimCardinal(data.location.continent)}`;
};
