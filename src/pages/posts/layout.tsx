'use client';

import { ReactNode } from 'react';
import Head from 'next/head';

import Components from '@/components';
import { usePostData } from '@/data/posts';
import styles from '@/styles/pages/posts/layout.module.scss';

type Props = {
  children: ReactNode | ReactNode[];
};

function Layout({ children }: Props) {
  const { data, isReady } = usePostData();

  if (!isReady) {
    return null;
  }

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Travels | {data.titleCombined}</title>
      </Head>
      <Components.Posts.Title
        context={[data.date, data.gear]}
        crumbs={data.breadcrumbs}
        tags={data.tags}
        title={data.title}
        uri={data.uri}
      />
      <Components.Posts.Hero image={data.image} />
      <Components.Posts.Post>
        {children}
        {(data.newer || data.older) && (
          <Components.Posts.Navigation
            newer={data.newer}
            newerLabel={!data.hasStage ? undefined : 'Next Day'}
            older={data.older}
            olderLabel={!data.hasStage ? undefined : 'Previous Day'}
          />
        )}
      </Components.Posts.Post>
    </Components.View>
  );
}

export default Layout;
