import travels from '@/app/api/data';

import { filterBy, getFilters } from './utils';

describe('utils', () => {
  let countOfThruHiking;
  let countOfSectionHiking;
  let countOfPeakBagging;
  let countOfVacationing;

  beforeEach(() => {
    countOfThruHiking = travels.filter(trip => trip.type === 'thru-hiking');
    countOfSectionHiking = travels.filter(trip => trip.type === 'section-hiking');
    countOfPeakBagging = travels.filter(trip => trip.type === 'peak-bagging');
    countOfVacationing = travels.filter(trip => trip.type === 'vacationing');
  });

  describe('filterBy', () => {
    it('will filter by trip type', () => {
      expect(filterBy(travels, '')).toHaveLength(travels.length);
      expect(filterBy(travels, null)).toHaveLength(travels.length);

      expect(filterBy(travels, 'vacationing')).toHaveLength(countOfVacationing.length);
      expect(filterBy(travels, 'peak-bagging')).toHaveLength(countOfPeakBagging.length);
      expect(filterBy(travels, 'section-hiking')).toHaveLength(countOfSectionHiking.length);
      expect(filterBy(travels, 'thru-hiking')).toHaveLength(countOfThruHiking.length);
    });
  });

  describe('getFilters', () => {
    it('will get filters based on trip types', () => {
      expect(getFilters(travels)).toEqual([
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
