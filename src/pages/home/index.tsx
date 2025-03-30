import Head from 'next/head';
import Link from 'next/link';

import { ABOUT_ME_BLURB } from '@/constants/general';
import { usePostsData } from '@/data/posts';
import styles from '@/styles/pages/home/index.module.scss';
import type { Post } from '@/types/post';
import Figure from '@/ui/figure';
import Image from '@/ui/image';
import Loading from '@/ui/loading';
import Masonry from '@/ui/masonry';
import Shortcuts from '@/ui/shortcuts';
import View from '@/ui/view';
import Skeleton from '@/ui/skeleton';

function Page() {
  const { data, isLoading, isReady } = usePostsData();

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Thru-hiker and Programmer based in Chicago</title>
      </Head>
      <div className={styles.header}>
        <Link aria-hidden="true" className={styles.image} href="/about">
          <Image
            alt=""
            height={432}
            sizes="25vw"
            src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
            width={768}
          />
        </Link>
        <h1 className={styles.title}>Kyle Gilbert</h1>
        <p className={styles.text}>{ABOUT_ME_BLURB}</p>
        <Shortcuts
          childClassName={styles.link}
          parentClassName={styles.links}
          shouldLabel
        />
      </div>
      {isLoading && <Loading />}
      {isReady && (
        <Masonry
          items={data}
          renderItem={(item: Post, index: number) => (
            <Figure
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
    </View>
  );
}

export default Page;
