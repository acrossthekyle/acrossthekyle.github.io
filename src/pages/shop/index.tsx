import Head from 'next/head';

import Components from '@/components';
import { usePrintsData } from '@/data/prints';
import styles from '@/styles/pages/shop/index.module.scss';

function Page() {
  const { data, isLoading, isReady } = usePrintsData();

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Store | Buy Prints</title>
      </Head>
      <h1 className={styles.heading}>Store</h1>
      <p className={styles.paragraph}>
        These prints for purchase are inspired by this planet, and captured by
        me, while marching through forests and over mountains.
      </p>
      {isLoading && <Components.Loading />}
      {isReady && (
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.item} key={item.title}>
              <Components.Shop.Card item={item} />
            </div>
          ))}
        </div>
      )}
    </Components.View>
  );
}

export default Page;
