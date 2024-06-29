import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/tags/index.module.scss';
import View from '@/ui/view';
import Travels from '@/ui/travels';

function Page() {
  const { query } = useRouter();

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Travels | Tagged "{query.tag}"</title>
      </Head>
      <Travels tag={query.tag as string} />
    </View>
  );
}

export default Page;
