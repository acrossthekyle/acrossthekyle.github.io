import { organize } from './utils';

describe('utils', () => {
  describe('organize', () => {
    const mockTravels = [
      { id: '1', year: '2023', category: 'destination', country: 'france', region: 'alps', title: 'vacation' },
      { id: '2', year: '2021', category: 'backpacking', country: 'united states', region: 'midwest', title: 'hike' },
      { id: '3', year: '2023', category: 'backpacking', country: 'chile', region: 'patagonia', title: 'hike' },
      { id: '4', year: '2025', category: 'destination', country: 'italy', region: 'dolomites', title: 'vacation' },
    ];

    it('will sort travels by year in descending order', () => {
      const result = organize(mockTravels, 'all');

      expect(result[0][0]).toBe('2025');
      expect(result[1][0]).toBe('2023');
      expect(result[2][0]).toBe('2021');
    });

    it('will group items accurately by their year', () => {
      const result = organize(mockTravels, 'all');
      const year2023Group = result.find(([year]) => year === '2023');

      expect(year2023Group?.[1]).toHaveLength(2);
      expect(year2023Group?.[1][0].id).toBe('1');
      expect(year2023Group?.[1][1].id).toBe('3');
    });

    it('will return all items when filterBy is set to "all"', () => {
      const result = organize(mockTravels, 'all');
      const totalItems = result.reduce((accumulator, [_, items]) => accumulator + items.length, 0);

      expect(totalItems).toBe(4);
    });

    it('will filter items by category ignoring case sensitivity', () => {
      const result = organize(mockTravels, 'destination');
      const totalItems = result.reduce((accumulator, [_, items]) => accumulator + items.length, 0);

      expect(totalItems).toBe(2);
      expect(result[0][1][0].category).toBe('destination');
    });

    it('will return an empty array if no items match the filter', () => {
      const result = organize(mockTravels, 'summits');

      expect(result).toEqual([]);
    });

    it('will handle an empty input list correctly', () => {
      const result = organize([], 'all');

      expect(result).toEqual([]);
    });
  });
});
