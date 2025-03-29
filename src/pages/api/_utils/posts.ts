import type { Post, QueriedPosts } from '@/types/post';

import { RESUME_URL } from '../../../constants';

export function getPublicPosts(posts: Post[]): Post[] {
  return posts.filter(({ isPrivate }) => !isPrivate);
}

export function getUniquePostTitles(posts: Post[]): string[] {
  return posts
    .map(({ title }) => title.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function getUniquePostLocations(posts: Post[]): string[] {
  return posts
    .map(({ locationFull }) => locationFull.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function filterPostsByQuery(
  query: string,
  posts: Post[],
  titles: string[],
  locations: string[],
): QueriedPosts[] {
  let results = [];

  if (!!query.trim()) {
    const filterablePosts = [...posts];

    query
      .trim()
      .split(' ')
      .forEach((part) => {
        const lowered = part.toLowerCase();

        if (/^\d{4}$/.test(lowered)) {
          results = [
            ...results,
            ...filterablePosts.filter(({ date }) => date.includes(lowered)),
          ];
        }

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
              date: '(Opens in a new tab/window)',
              title: 'My Resume',
              uri: RESUME_URL,
            },
          ];
        }

        if (
          ['gear', 'pack', 'list', 'supplies', 'backpack', 'loadout'].includes(
            lowered,
          )
        ) {
          results = [
            ...results,
            {
              date: 'Lists of gear I carry on each trip',
              title: 'Packs',
              uri: '/packs',
            },
          ];
        }

        const matchedLocations = locations.filter((_) => _.includes(lowered));
        const matchedTitles = titles.filter((_) => _.includes(lowered));

        if (matchedLocations.length > 0 && matchedTitles.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ locationFull, title }) => {
              return (
                locationFull.toLowerCase().includes(lowered) ||
                title.toLowerCase().includes(lowered)
              );
            }),
          ];
        } else if (matchedLocations.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ locationFull }) => {
              return locationFull.toLowerCase().includes(lowered);
            }),
          ];
        } else if (matchedTitles.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ title }) => {
              return title.toLowerCase().includes(lowered);
            }),
          ];
        }
      });
  }

  return results.map(({ date, title, uri }) => ({
    date,
    title,
    uri,
  }));
}

export function getUniqueSearchResults(results: QueriedPosts[], key: string) {
  const uniqueResults = new Set();

  return results.filter((item) => {
    const value = item[key];

    if (!uniqueResults.has(value)) {
      uniqueResults.add(value);

      return true;
    }

    return false;
  });
}
