import type { NextApiRequest, NextApiResponse } from 'next';

import type { Posts } from '@/types';

import posts from '../../_database/posts';
import { getPublicPosts } from '../../_utils/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Posts.Post>,
) {
  const id = request.query.id;
  const day = Number(request.query.day);

  const post: Posts.Raw | null =
    getPublicPosts(posts).find(({ uri }) => uri === `/posts/${id}`) ?? null;

  if (post === null) {
    response.status(404);

    return;
  }

  const postIndex = posts.findIndex(({ uri }) => uri === `/posts/${id}`);

  let stage = undefined;
  let newer = undefined;
  let older = undefined;

  if (!post.isPrivate) {
    if (day > -1 && post.stages) {
      const index = day - 1;

      stage = {
        ...post.stages[index],
        index: index,
      };

      if (index >= 0) {
        if (post?.stages[index + 1] !== undefined) {
          newer = {
            image: post?.stages[index + 1].image,
            title: post?.stages[index + 1].title,
            uri: `${post?.uri}/${String(index + 2).padStart(2, '0')}`,
          };
        }

        if (post?.stages[index - 1] !== undefined) {
          older = {
            image: post?.stages[index - 1].image,
            title: post?.stages[index - 1].title,
            uri: `${post?.uri}/${String(index).padStart(2, '0')}`,
          };
        }
      }
    } else {
      if (posts[postIndex - 1] !== undefined) {
        newer = {
          image: posts[postIndex - 1].image,
          title: posts[postIndex - 1].title,
          uri: posts[postIndex - 1].uri,
        };
      }

      if (posts[postIndex + 1] !== undefined) {
        older = {
          image: posts[postIndex + 1].image,
          title: posts[postIndex + 1].title,
          uri: posts[postIndex + 1].uri,
        };
      }
    }
  }

  const hasStage = stage !== undefined;

  response.status(200).json({
    breadcrumbs: hasStage
      ? [
          {
            text: post.title,
            uri: post.uri,
          },
          {
            text: 'Timeline',
            uri: `${post.uri}#timeline`,
          },
          {
            text: `Day ${day}`,
          },
        ]
      : undefined,
    date: stage?.dateFull || post.date,
    pack: post.gear,
    hasStage,
    image: stage?.image || post.image,
    newer,
    older,
    tags: post.tags,
    title: stage?.title || post.title,
    titleCombined: `${post.title}${hasStage ? ` - ${stage?.title}` : ''}`,
    uri: post.uri,
  });
}
