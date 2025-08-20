import { groupBy } from 'lodash';

import type { Filter, Trip } from '@/types';
import { getStaticType } from '@/utils';

export function filterBy(trips: Trip[], filter: string | null): Trip[] {
  if (!filter) {
    return trips;
  }

  return trips.filter((trip) => trip.type === filter.toLowerCase());
}

export function getFilters(trips: Trip[]): Filter[] {
  const types = trips.map((trip) => trip.type);
  const groups = groupBy(types);
  const result: Filter[] = [];

  for (const item in groups) {
    result.push({
      count: groups[item].length,
      filter: item,
      name: `${getStaticType(item)}${groups[item].length > 1 ? 's' : ''}`,
    });
  }

  return result;
}
