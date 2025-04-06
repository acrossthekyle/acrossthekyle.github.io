import Constants from '@/constants';
import type { Search } from '@/types';

export function getSpecialSearchResults(query: string): Search.Item[] {
  let results = [];

  if (!!query.trim()) {
    query
      .trim()
      .split(' ')
      .forEach((part) => {
        const lowered = part.toLowerCase();

        if (
          [
            'about',
            'experience',
            'hire',
            'hiring',
            'jobs',
            'resume',
            'work',
          ].includes(lowered)
        ) {
          results = [
            ...results,
            {
              subTitle: '(Opens in a new tab/window)',
              title: 'My Resume',
              uri: Constants.RESUME_URL,
            },
          ];
        }

        if (
          [
            'gear',
            'pack',
            'packs',
            'list',
            'supplies',
            'backpack',
            'loadout',
          ].includes(lowered)
        ) {
          results = [
            ...results,
            {
              subTitle: 'Lists of gear I carry on each trip',
              title: 'Packs',
              uri: '/packs',
            },
          ];
        }
      });
  }

  return results.map(({ subTitle, title, uri }) => ({
    subTitle,
    title,
    uri,
  }));
}
