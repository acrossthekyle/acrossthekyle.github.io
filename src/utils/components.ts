import type { Components, Posts } from '@/types';

export function transformPostsForMasonry(
  posts: Posts.Post[],
): Components.MasonryItem[] {
  const items: Components.MasonryItem[] = posts.map(
    ({ categories, date, image, snippet, title, uri }) => ({
      categories,
      date,
      image,
      snippet,
      title,
      uri,
    }),
  );

  return items;
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
