import Head from 'next/head';
import Link from 'next/link';

import Components from '@/components';
import Constants from '@/constants';
import { usePostsData } from '@/data/posts';
import styles from '@/styles/pages/home/index.module.scss';
import type { Post } from '@/types';

function Page() {
  const { data, isLoading, isReady } = usePostsData();

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Thru-hiker and Programmer based in Chicago</title>
      </Head>
      <div className={styles.header}>
        <Link aria-hidden="true" className={styles.image} href="/about">
          <Components.Image
            alt=""
            height={432}
            sizes="25vw"
            src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
            width={768}
          />
        </Link>
        <h1 className={styles.title}>Kyle Gilbert</h1>
        <p className={styles.text}>{Constants.ABOUT_ME_BLURB}</p>
        <Components.Shortcuts
          childClassName={styles.link}
          parentClassName={styles.links}
          shouldLabel
        />
      </div>
      {isLoading && <Components.Loading />}
      {isReady && (
        <Components.Masonry
          items={data}
          renderItem={(item: Post, index: number) => (
            <Components.Figure
              date={item.date}
              image={item.image}
              preview={item.snippet}
              tags={Array.isArray(item.tags) ? item.tags : item.tags.split(',')}
              title={item.title}
              uri={item.uri}
            />
          )}
        />
      )}
    </Components.View>
  );
}

export default Page;
