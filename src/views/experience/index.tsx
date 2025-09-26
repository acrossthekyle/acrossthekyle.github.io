'use client';

import { Article } from '@/ui/article';

import { Header, Overview, Pictures } from './sections';
import Loading from './loading';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Layout({ slug }: Props) {
  const { handleOnScrollEnd, isOnGrandChild, shown, data } = useModel(slug);

  if (!data) {
    return <Loading />;
  }

  return (
    <Article
      className={styles.article(isOnGrandChild)}
      onScrollEnd={handleOnScrollEnd}
    >
      <Header date={data.date} title={data.title} />
      <Overview data={data} />
      <Pictures slug={slug} stages={[...data.stages].splice(0, shown)} />
    </Article>
  );
}
