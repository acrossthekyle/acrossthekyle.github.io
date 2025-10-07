'use client';

import { Article } from '@/ui/article';

import { Header, Overview, Pictures } from './sections';
import Loading from './loading';
import { useModel } from './model';
import Shortcuts from './shortcuts';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Layout({ slug }: Props) {
  const { data, isOnGrandChild } = useModel(slug);

  if (!data) {
    return <Loading />;
  }

  return (
    <Article className={styles.article(isOnGrandChild)}>
      <Shortcuts slug={slug} />
      <Header title={data.title} />
      <Pictures slug={slug} stages={data.stages} />
      <Overview description={data.description} />
    </Article>
  );
}
