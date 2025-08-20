import trips from '@/app/api/data';

import { filterBy, getFilters } from './utils';

describe('utils', () => {
  let countOfThruHiking;
  let countOfSectionHiking;
  let countOfPeakBagging;
  let countOfVacationing;

  beforeEach(() => {
    countOfThruHiking = trips.filter(trip => trip.type === 'thru-hiking');
    countOfSectionHiking = trips.filter(trip => trip.type === 'section-hiking');
    countOfPeakBagging = trips.filter(trip => trip.type === 'peak-bagging');
    countOfVacationing = trips.filter(trip => trip.type === 'vacationing');
  });

  describe('filterBy', () => {
    it('will filter by trip type', () => {
      expect(filterBy(trips, '')).toHaveLength(trips.length);
      expect(filterBy(trips, null)).toHaveLength(trips.length);

      expect(filterBy(trips, 'vacationing')).toHaveLength(countOfVacationing.length);
      expect(filterBy(trips, 'peak-bagging')).toHaveLength(countOfPeakBagging.length);
      expect(filterBy(trips, 'section-hiking')).toHaveLength(countOfSectionHiking.length);
      expect(filterBy(trips, 'thru-hiking')).toHaveLength(countOfThruHiking.length);
    });
  });

  describe('getFilters', () => {
    it('will get filters based on trip types', () => {
      expect(getFilters(trips)).toEqual([
        {
          count: countOfThruHiking.length,
          filter: 'thru-hiking',
          name: 'thru-hikes',
        },
        {
          count: countOfVacationing.length,
          filter: 'vacationing',
          name: 'vacation',
        },
        {
          count: countOfSectionHiking.length,
          filter: 'section-hiking',
          name: 'section-hike',
        },
        {
          count: countOfPeakBagging.length,
          filter: 'peak-bagging',
          name: 'peak-bagging',
        },
      ]);
    });
  });
});
