import Head from 'next/head';

import styles from '@/styles/pages/shop/policies.module.scss';
import Policies from '@/ui/shop/policies';
import View from '@/ui/view';

function Page() {
  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop | Policies</title>
      </Head>
      <div className={styles.container}>
        <h1>Shop Policies</h1>
        <Policies />
      </div>
    </View>
  );
}

export default Page;
