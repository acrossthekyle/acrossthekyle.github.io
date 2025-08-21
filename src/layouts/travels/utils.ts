import { groupBy } from 'lodash';

import type { Filter, Travel } from '@/types';
import { getStaticType } from '@/utils';

export function filterBy(travels: Travel[], type: string | null): Travel[] {
  if (!type) {
    return travels;
  }

  return travels.filter((travel) => travel.type === type.toLowerCase());
}

export function getFilters(travels: Travel[]): Filter[] {
  const types = travels.map((travel) => travel.type);
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
