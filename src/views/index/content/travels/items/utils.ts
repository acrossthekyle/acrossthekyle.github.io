import type { Travel } from '@/types';

export function organize(travels: Travel[], filterBy: string) {
  const sorted = [...travels]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .filter(travel => {
      if (filterBy === 'all') {
        return true;
      }

      return travel.category.toLowerCase() === filterBy;
    });

  const grouped = Map.groupBy(sorted, item => item.year);

  return Array.from(grouped.entries());
};
