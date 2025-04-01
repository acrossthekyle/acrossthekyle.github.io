import Head from 'next/head';

import Components from '@/components';
import { usePrintsData } from '@/data/prints';
import styles from '@/styles/pages/shop/index.module.scss';
import type { Print } from '@/types';

function Page() {
  const { data, isLoading, isReady } = usePrintsData();

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Shop Prints</title>
      </Head>
      <h1 className={styles.heading}>Shop</h1>
      <p className={styles.paragraph}>
        These photos for sale are inspired by this planet, and captured by me,
        while marching through forests and over mountain-tops.
      </p>
      {isLoading && <Components.Loading />}
      {isReady && (
        <Components.Masonry
          items={data}
          renderItem={(item: Print, index: number) => (
            <Components.Figure
              date={item.date}
              image={item.image}
              preview={item.snippet}
              tags={item.tags}
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
