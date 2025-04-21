import type { Components } from '@/types';

export function transformPosts(posts): Components.MasonryItem[] {
  const items: Components.MasonryItem[] = posts.map(
    ({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags,
      title,
      uri,
    }),
  );

  return items;
}
