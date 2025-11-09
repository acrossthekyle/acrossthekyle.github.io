'use client';

import type { Post } from '@/types';
import { Article } from '@/ui/article';

import Footer from './footer';
import Gallery from './gallery';
import Header from './header';
import Info from './info';
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
      <Header title={data.title} />
      <Info date={data.date} location={data.location} type={data.type} />
      <Shortcuts />
      {data.category === 'destinations' ? (
        <Gallery stages={data.stages} />
      ) : (
        <Timeline
          label={data.label}
          slug={data.slug}
          stages={data.stages}
          title={data.title}
        />
      )}
      <Overview description={data.description} />
      <Footer />
    </Article>
  );
}
