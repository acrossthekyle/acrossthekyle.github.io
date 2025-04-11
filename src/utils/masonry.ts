import type { Components, Posts, Tags } from '@/types';

export function transformPosts(posts: Posts.Post[]): Components.MasonryItem[] {
  const items: Components.MasonryItem[] = posts.map((post: Posts.Post) => ({
    date: post.date,
    image: post.image,
    snippet: post.snippet,
    tags: post.tags,
    title: post.title,
    uri: post.uri,
  }));

  return items;
}

export function transformTags(tags: Tags.Tag.Item[]): Components.MasonryItem[] {
  const items: Components.MasonryItem[] = tags.map((tag: Tags.Tag.Item) => ({
    date: tag.date,
    image: tag.image,
    snippet: tag.snippet,
    tags: tag.tags,
    title: tag.title,
    uri: tag.uri,
  }));

  return items;
}
