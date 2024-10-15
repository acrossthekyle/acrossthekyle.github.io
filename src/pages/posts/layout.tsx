'use client';

import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/posts/index.module.scss';

import posts from '../../posts';
import { getPostIdAndStageFromUriSegment } from '../../utils';

import Post from '@/ui/post';
import Hero from '@/ui/post/hero';
import Navigation from '@/ui/post/navigation';
import Title from '@/ui/post/title';
import View from '@/ui/view';

type Props = {
  children: ReactNode | ReactNode[];
};

function Layout({ children }: Props) {
  const [post, setPost] = useState(null);
  const [stage, setStage] = useState(undefined);

  const route = useRouter().asPath;

  useEffect(() => {
    setPost(null);
    setStage(undefined);
  }, [route]);

  useEffect(() => {
    if (post === null && stage === undefined) {
      const { id, stageIndex } = getPostIdAndStageFromUriSegment(
        route.split('/posts/'),
      );

      setPost(posts.getById(id));
      setStage(stageIndex > -1 ? posts.getStage(id, stageIndex) : undefined);
    }
  }, [post, route, stage]);

  if (!post) {
    return null;
  }

  return (
    <View className={styles.view}>
      <Head>
        <title>
          Kyle &mdash; Travels | {post.title}
          {stage !== undefined && ` - ${stage.title}`}
        </title>
      </Head>
      <Title
        context={[stage?.dateFull || post.date, post.gear]}
        crumbs={
          stage !== undefined && [
            {
              text: post.title,
              uri: post.uri,
            },
            {
              text: 'Timeline',
              uri: `${post.uri}#timeline`,
            },
            {
              text: `Day ${stage.index + 1}`,
            },
          ]
        }
        tags={post.tags}
        title={stage?.title || post.title}
        uri={post.uri}
      />
      <Hero image={stage?.image || post.image} />
      <Post>
        {children}
        <Navigation
          newer={
            stage === undefined
              ? posts.getNewer(post)
              : posts.getStageNext(post, stage)
          }
          newerLabel={stage === undefined ? undefined : 'Next Day'}
          older={
            stage === undefined
              ? posts.getOlder(post)
              : posts.getStagePrevious(post, stage)
          }
          olderLabel={stage === undefined ? undefined : 'Previous Day'}
        />
      </Post>
    </View>
  );
}

export default Layout;
