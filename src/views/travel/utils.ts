import type { Trip } from '@/types';

export function getStats(trip?: Trip) {
  if (!trip) {
    return null;
  }

  if (trip.type === 'thru-hiking' && trip.stats.distance) {
    return `${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full} over ${trip.stats.days.value} ${trip.label}s`;
  }

  if (trip.type === 'section-hiking' && trip.stats.distance) {
    return `${trip.stats.days.value} ${trip.label}s covering ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full}`;
  }

  return null;
}
