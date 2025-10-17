'use client';

import type { Post } from '@/types';
import { Article } from '@/ui/article';

import { Header, Overview, Pictures } from './sections';
import { useModel } from './model';
import Shortcuts from './shortcuts';
import styles from './stylesheet';

type Props = {
  data: Post | null;
};

export default function Layout({ data }: Props) {
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
      <Pictures slug={data.slug} stages={data.stages} />
      <Overview description={data.description} />
    </Article>
  );
}
