import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/tags/index.module.scss';
import View from '@/ui/view';
import Posts from '@/ui/posts';

function Page() {
  const { query } = useRouter();

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Posts | Tagged "{query.tag}"</title>
      </Head>
      <Posts tag={query.tag as string} />
    </View>
  );
}

export default Page;
