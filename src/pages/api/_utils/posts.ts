import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import fs from 'fs/promises';
import path from 'path';

import type { Posts, Search } from '@/types';

export function getPublicPosts(posts: Posts.Raw[]): Posts.Raw[] {
  return posts.filter(({ isPrivate }) => !isPrivate);
}

export function getUniquePostTitles(posts: Posts.Raw[]): string[] {
  return posts
    .map(({ title }) => title.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function getUniquePostLocations(posts: Posts.Raw[]): string[] {
  return posts
    .map(({ locationFull }) => locationFull.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function filterPostsByQuery(
  posts: Posts.Raw[],
  query: string,
): Search.Item[] {
  const titles = getUniquePostTitles(posts);
  const locations = getUniquePostLocations(posts);

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
    subTitle: date,
    title,
    uri,
  }));
}

export async function routeFromGpx(filePath: string): Promise<any | undefined> {
  try {
    const xml = await fs.readFile(
      path.join(
        process.cwd(),
        './src/pages/api/_database/posts/routes/gpxs',
        filePath,
      ),
      'utf-8',
    );

    return gpx(new DOMParser().parseFromString(xml, 'text/xml'));
  } catch (e: any) {
    return undefined;
  }
}
