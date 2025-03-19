import Head from 'next/head';

import { usePacksData } from '@/data/packs';
import styles from '@/styles/pages/packs/index.module.scss';
import Loading from '@/ui/loading';
import Timeline from '@/ui/timeline';
import View from '@/ui/view';

function Page() {
  const { data, isLoading } = usePacksData();

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Packs</title>
      </Head>
      <h1 className={styles.heading}>Packs</h1>
      <p className={styles.paragraph}>
        I've been on several backpacking trips all around the world, and each
        trek needs its own set of gear. Here's all of the gear loadouts with
        links and weights.
      </p>
      {isLoading && <Loading />}
      {!isLoading && (
        <Timeline
          segments={data.map((result) => ({
            eyeBrow: result.type,
            title: result.title,
            uri: result.url,
          }))}
        />
      )}
    </View>
  );
}

export default Page;
