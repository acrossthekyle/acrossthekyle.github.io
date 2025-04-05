import type { NextApiRequest, NextApiResponse } from 'next';

import posts from '../../_database/posts';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const query = request.query.slug;
  const stageIndex = Number(request.query.stageIndex);

  const post = posts.find(({ uri }) => uri === `/posts/${query}`) ?? null;
  const postIndex = posts.findIndex(({ uri }) => uri === `/posts/${query}`);

  if (post === null) {
    response.status(404);

    return;
  }

  let stage = undefined;
  let newer = undefined;
  let older = undefined;

  if (!post.isPrivate) {
    if (stageIndex > -1) {
      const updatedStageIndex = stageIndex - 1;

      stage = {
        ...post.stages[updatedStageIndex],
        index: updatedStageIndex,
      };

      if (updatedStageIndex >= 0) {
        if (post?.stages[updatedStageIndex + 1] !== undefined) {
          newer = {
            image: post?.stages[updatedStageIndex + 1].image,
            title: post?.stages[updatedStageIndex + 1].title,
            uri: `${post?.uri}/${String(updatedStageIndex + 2).padStart(2, '0')}`,
          };
        }

        if (post?.stages[updatedStageIndex - 1] !== undefined) {
          older = {
            image: post?.stages[updatedStageIndex - 1].image,
            title: post?.stages[updatedStageIndex - 1].title,
            uri: `${post?.uri}/${String(updatedStageIndex).padStart(2, '0')}`,
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
            text: `Day ${stage?.index + 1}`,
          },
        ]
      : undefined,
    date: stage?.dateFull || post.date,
    gear: post.gear,
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
