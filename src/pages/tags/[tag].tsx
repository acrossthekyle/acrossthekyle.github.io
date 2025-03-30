'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useItemsByTagData } from '@/data/tags';
import styles from '@/styles/pages/tags/index.module.scss';
import type { Post } from '@/types/post';
import Figure from '@/ui/figure';
import Masonry from '@/ui/masonry';
import View from '@/ui/view';

function Page() {
  const { query } = useRouter();

  const { data, getByTag, isReady } = useItemsByTagData();

  useEffect(() => {
    getByTag((Array.isArray(query.tag) ? query.tag : [query.tag]).join(' '));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (!isReady) {
    return null;
  }

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Posts | Tagged "{query.tag}"</title>
      </Head>
      <h1 className={styles.header}>{query.tag}</h1>
      <p className={styles.total}>{`${data.total} Item(s)`}</p>
      <Masonry
        items={data.results}
        renderItem={(
          { date, image, snippet, tags, title, uri }: Post,
          index: number,
        ) => (
          <Figure
            date={date}
            image={image}
            preview={snippet}
            tags={Array.isArray(tags) ? tags : tags.split(',')}
            title={title}
            uri={uri}
          />
        )}
      />
    </View>
  );
}

export default Page;
