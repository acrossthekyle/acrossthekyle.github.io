import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/tags/index.module.scss';
import { Post } from '@/types/post';
import Figure from '@/ui/figure';
import Masonry from '@/ui/masonry';
import View from '@/ui/view';

import posts from '../../posts';

function Page() {
  const { query } = useRouter();

  const all = posts.getItems().filter(({ tags }) => tags.includes(query.tag));

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Posts | Tagged "{query.tag}"</title>
      </Head>
      <h1 className={styles.header}>{query.tag}</h1>
      <p className={styles.total}>{`${all.length} Posts`}</p>
      <Masonry
        items={all}
        renderItem={(item: Post, index: number) => (
          <Figure
            date={item.date}
            image={item.image}
            preview={item.snippet}
            tags={item.tags.split(',')}
            title={item.title}
            uri={item.uri}
          />
        )}
      />
    </View>
  );
}

export default Page;
