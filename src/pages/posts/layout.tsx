'use client';

import { ReactNode } from 'react';
import Head from 'next/head';

import { usePostData } from '@/data/posts';
import styles from '@/styles/pages/posts/index.module.scss';

import Post from '@/ui/post';
import Hero from '@/ui/post/hero';
import Navigation from '@/ui/post/navigation';
import Title from '@/ui/post/title';
import View from '@/ui/view';

type Props = {
  children: ReactNode | ReactNode[];
};

function Layout({ children }: Props) {
  const { data, isReady } = usePostData();

  if (!isReady) {
    return null;
  }

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Travels | {data.titleCombined}</title>
      </Head>
      <Title
        context={[data.date, data.gear]}
        crumbs={data.breadcrumbs}
        tags={data.tags}
        title={data.title}
        uri={data.uri}
      />
      <Hero image={data.image} />
      <Post>
        {children}
        <Navigation
          newer={data.newer}
          newerLabel={!data.hasStage ? undefined : 'Next Day'}
          older={data.older}
          olderLabel={!data.hasStage ? undefined : 'Previous Day'}
        />
      </Post>
    </View>
  );
}

export default Layout;
