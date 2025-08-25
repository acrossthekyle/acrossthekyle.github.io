import travels from '@/app/api/data';

import { filterBy, getFilters } from './utils';

describe('utils', () => {
  let countOfCollection;
  let countOfDayHike;
  let countOfPeakBagging;
  let countOfSectionHike;
  let countOfThruHike;
  let countOfVacation;

  beforeEach(() => {
    countOfCollection = travels.filter(travel => travel.type === 'collection');
    countOfDayHike = travels.filter(travel => travel.type === 'day-hike');
    countOfPeakBagging = travels.filter(travel => travel.type === 'peak-bagging');
    countOfSectionHike = travels.filter(travel => travel.type === 'section-hike');
    countOfThruHike = travels.filter(travel => travel.type === 'thru-hike');
    countOfVacation = travels.filter(travel => travel.type === 'vacation');
  });

  describe('filterBy', () => {
    it('will filter by travel type', () => {
      expect(filterBy(travels, '')).toHaveLength(travels.length);
      expect(filterBy(travels, null)).toHaveLength(travels.length);

      expect(filterBy(travels, 'collection')).toHaveLength(countOfCollection.length);
      expect(filterBy(travels, 'day-hike')).toHaveLength(countOfDayHike.length);
      expect(filterBy(travels, 'peak-bagging')).toHaveLength(countOfPeakBagging.length);
      expect(filterBy(travels, 'section-hike')).toHaveLength(countOfSectionHike.length);
      expect(filterBy(travels, 'thru-hike')).toHaveLength(countOfThruHike.length);
      expect(filterBy(travels, 'vacation')).toHaveLength(countOfVacation.length);
    });
  });

  describe('getFilters', () => {
    it('will get filters based on travel types, sorted alphabetically', () => {
      expect(getFilters(travels)).toEqual([
        {
          count: countOfCollection.length,
          filter: 'collection',
          name: 'collections',
        },
        {
          count: countOfDayHike.length,
          filter: 'day-hike',
          name: 'day-hike',
        },
        {
          count: countOfPeakBagging.length,
          filter: 'peak-bagging',
          name: 'peak-bagging',
        },
        {
          count: countOfSectionHike.length,
          filter: 'section-hike',
          name: 'section-hike',
        },
        {
          count: countOfThruHike.length,
          filter: 'thru-hike',
          name: 'thru-hikes',
        },
        {
          count: countOfVacation.length,
          filter: 'vacation',
          name: 'vacations',
        },
      ]);
    });
  });
});
