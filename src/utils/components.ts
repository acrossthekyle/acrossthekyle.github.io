import type { Components, Posts } from '@/types';

export function transformPostsOrStagesForMasonry(
  input: Posts.Post[] | Posts.Stage[],
): Components.MasonryItem[] {
  const output: Components.MasonryItem[] = input.map(
    ({ categories, date, title, ...rest }) => ({
      categories: categories || [],
      date,
      image: rest.image || '',
      snippet: rest.snippet || '',
      title,
      uri: rest.uri || '',
    }),
  );

  return output;
}

export function transformStagesForTimeline(
  stages: Posts.Stage[] | null,
): Components.TimelineSegment[] {
  let items: Components.TimelineSegment[] = [];

  if (stages === null) {
    return items;
  }

  items = stages.map(({ date, title, uri }) => ({
    cta: 'View',
    eyeBrow: date,
    title,
    uri,
  }));

  return items;
}
