import Head from 'next/head';

import styles from '@/styles/pages/packs/index.module.scss';
import Timeline from '@/ui/timeline';
import View from '@/ui/view';

function getUrl(id: string) {
  return `https://lighterpack.com/r/${id}`;
}

function Page() {
  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Packs</title>
      </Head>
      <h1 className={styles.heading}>Packs</h1>
      <p className={styles.paragraph}>
        I've been on several backpacking thru-hikes all around the world, and
        each trek needs its own set of gear. Here's all of the gear loadouts I
        have used on each of my thru-hikes with links and weights.
      </p>
      <Timeline
        segments={[
          {
            eyeBrow: 'Out-and-back',
            title: 'Overnight Backpacking',
            uri: getUrl('j9gvo1'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'Grand Randonnée 20',
            uri: getUrl('76sj40'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'West Highland Way',
            uri: getUrl('ng8tzb'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'O Circuit',
            uri: getUrl('bw0s1t'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'Annapurna Circuit',
            uri: getUrl('f6hp0p'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'Alta Via 1',
            uri: getUrl('kolkui'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'Tour du Mont Blanc',
            uri: getUrl('yi7qss'),
          },
          {
            eyeBrow: 'Thru-hike',
            title: 'Camino de Santiago',
            uri: getUrl('p1be03'),
          },
        ]}
      />
    </View>
  );
}

export default Page;
