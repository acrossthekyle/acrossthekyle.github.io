'use client';

import type { Post } from '@/types';
import { Article } from '@/ui/article';

import Footer from './footer';
import Gallery from './gallery';
import Header from './header';
import { useModel } from './model';
import Overview from './overview';
import Shortcuts from './shortcuts';
import Timeline from './timeline';
import styles from './stylesheet';

type Props = {
  data: Post | null;
};

export default function View({ data }: Props) {
  const { isOnGrandChild } = useModel();

  if (data === null) {
    return (
      <Article className={styles.article(false)}>
        <Header title={['404 Not Found']} />
        <Overview description={['Sorry, this does not exist.']} />
      </Article>
    );
  }

  return (
    <Article className={styles.article(isOnGrandChild)}>
      <Shortcuts />
      <Header title={data.title} />
      <div className={styles.section}>
        {data.type === 'destinations' ? (
          <Gallery stages={data.stages} />
        ) : (
          <Timeline
            slug={data.slug}
            stages={data.stages}
          />
        )}
        <Overview description={data.description} />
      </div>
      <Footer />
    </Article>
  );
}
