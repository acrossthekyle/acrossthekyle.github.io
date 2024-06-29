'use client';

import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/posts/index.module.scss';

import posts from '../../posts';

import View from '@/ui/view';
import Post from '@/ui/post';
import Hero from '@/ui/post/hero';
import Navigation from '@/ui/post/navigation';
import Title from '@/ui/post/title';

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
      const base = route.split('/posts/');
      const parts = (
        base[1].indexOf('#') > -1
          ? base[1].substring(0, base[1].indexOf('#'))
          : base[1]
      ).split('/');

      setPost(posts.getById(parts[0]));
      setStage(
        parts.length > 1
          ? posts.getStage(parts[0], Number(parts[1]))
          : undefined,
      );
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
        context={[stage === undefined ? post.date : stage.dateFull, post.gear]}
        day={stage !== undefined ? stage.index + 1 : undefined}
        days={stage !== undefined ? post.stages.length : undefined}
        parent={stage !== undefined ? post.title : undefined}
        tags={stage === undefined ? post.tags : undefined}
        title={stage === undefined ? post.title : stage.title}
        titleShort={post.titleShort}
        uri={post.uri}
      />
      <Hero image={stage === undefined ? post.image : stage.image} />
      <Post>
        {children}

        <Navigation
          newer={
            stage === undefined
              ? posts.getNewer(post)
              : posts.getStageNext(post, stage)
          }
          newerLabel={stage === undefined ? undefined : 'Next Stage'}
          older={
            stage === undefined
              ? posts.getOlder(post)
              : posts.getStagePrevious(post, stage)
          }
          olderLabel={stage === undefined ? undefined : 'Previous Stage'}
        />
      </Post>
    </View>
  );
}

export default Layout;
