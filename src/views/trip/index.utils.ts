import type { Trip } from '@/types';

export function getStats(trip: Trip) {
  if (trip.type === 'thru-hike' && trip.stats.distance) {
    return ` over ${trip.stats.days.value} days, covering ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full}, `;
  }

  if (trip.type === 'section-hike' && trip.stats.distance) {
    return ` over ${trip.stats.days.value} sections covering ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full} `;
  }

  if (trip.type === 'peak-bagging' && trip.stats.altitude) {
    return ` extending ${trip.stats.altitude.value.imperial} ${trip.stats.altitude.units.imperial.full} into the sky. `;
  }

  return `, spending ${trip.stats.days.value} days exploring ${trip.stats.length.value} sights and sounds `;
}
