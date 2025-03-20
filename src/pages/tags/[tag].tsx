import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { usePostsByTagData } from '@/data/posts';
import styles from '@/styles/pages/tags/index.module.scss';
import Figure from '@/ui/figure';
import Masonry from '@/ui/masonry';
import View from '@/ui/view';

function Page() {
  const { query } = useRouter();

  const { data, getByTag, isReady } = usePostsByTagData();

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
      <p className={styles.total}>{`${data.total} Posts`}</p>
      <Masonry
        items={data.results}
        renderItem={(
          { date, image, snippet, tags, title, uri },
          index: number,
        ) => (
          <Figure
            date={date}
            image={image}
            preview={snippet}
            tags={tags}
            title={title}
            uri={uri}
          />
        )}
      />
    </View>
  );
}

export default Page;
