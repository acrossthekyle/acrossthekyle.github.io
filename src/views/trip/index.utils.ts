import type { Trip } from '@/types';

export function getStats(trip: Trip) {
  if (trip.type === 'thru-hike' && trip.stats.distance) {
    return `${trip.stats.days.value} days, ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full}`;
  }

  if (trip.type === 'section-hike' && trip.stats.distance) {
    return `${trip.stats.days.value} sections, ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full}`;
  }

  if (trip.type === 'peak-bagging' && trip.stats.altitude) {
    return ``;
  }

  return `${trip.stats.days.value} days, ${trip.stats.length.value} destinations`;
}
