import Head from 'next/head';

import styles from '@/styles/pages/shop/index.module.scss';
import { Print } from '@/types/print';
import Figure from '@/ui/figure';
import Masonry from '@/ui/masonry';
import View from '@/ui/view';

import prints from '../../prints';

function Page() {
  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop Prints</title>
      </Head>
      <div className={styles.container}>
        <div data-backdrop data-backdrop-active="false" />
        <h1 className={styles.heading}>Shop</h1>
        <p className={styles.paragraph}>
          I've been on several backpacking thru-hikes all around the world, from
          Patagonia in the southern tip of South America to the heights of the
          Himalayas in Nepal. The items for sale in this shop are either moments
          captured by me while marching through forests and over mountain-tops,
          or inspired by the nature of this planet.
        </p>
        <Masonry
          items={prints.getItems()}
          renderItem={(item: Print, index: number) => (
            <Figure
              image={item.image}
              preview={item.snippet}
              title={item.title}
              uri={item.uri}
            />
          )}
        />
      </div>
    </View>
  );
}

export default Page;
