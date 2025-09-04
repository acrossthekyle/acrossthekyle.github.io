'use client';

import { Article } from '@/ui/article';

import Description from './description';
import Figure from './figure';
import Header from './header';
import Loading from './loading';
import Subheader from './subheader';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnScrollEnd, shown, travel } = useModel(slug);

  if (!travel) {
    return <Loading />;
  }

  return (
    <Article onScrollEnd={handleOnScrollEnd}>
      <Header title={travel.title} />
      <Subheader date={travel.date} location={travel.location} />
      <Description description={travel.description} />
      <ul className={styles.stages}>
        {[...travel.stages].splice(0, shown).map((stage) => (
          <li
            className={styles.stage}
            key={stage.index}
            style={{ animationDelay: `${0.1 + ((stage.index % 6) * 0.125)}s` }}
          >
            <Figure stage={stage} />
          </li>
        ))}
      </ul>
    </Article>
  );
}
