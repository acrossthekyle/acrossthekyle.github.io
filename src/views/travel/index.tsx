'use client';

import { ChevronDown } from 'lucide-react';

import Article from '@/ui/article';

import Description from './description';
import Figure from './figure';
import Header from './header';
import Subheader from './subheader';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnMaximize, handleOnViewMore, shown, travel } = useModel(slug);

  if (!travel) {
    return (
      <Article className={styles.section}>
        <ul className={styles.stages}>
          {Array.from({ length: 13 }).map((_, index) => (
            <li
              className={styles.stage}
              key={index}
              style={{ animationDelay: `${0.1 + (index * 0.125)}s` }}
            >
              <div className={styles.pulse} />
            </li>
          ))}
        </ul>
      </Article>
    );
  }

  return (
    <Article className={styles.section}>
      <Header
        title={travel.title}
        type={travel.type}
      />
      <Subheader
        date={travel.date}
        location={travel.location}
        tagline={travel.tagline}
      />
      <Description description={travel.description} />
      <ul className={styles.stages}>
        {[...travel.stages].splice(0, shown).map((stage) => (
          <li
            className={styles.stage}
            key={stage.index}
            style={{ animationDelay: `${0.1 + ((stage.index % 6) * 0.125)}s` }}
          >
            <Figure
              label={travel.label}
              onMaximize={handleOnMaximize}
              stage={stage}
              total={travel.stats.length.value}
            />
          </li>
        ))}
      </ul>
      {shown < Number(travel.stats.length.value) && (
        <button
          className={styles.more}
          onClick={handleOnViewMore}
          type="button"
        >
          Continue
          <ChevronDown />
        </button>
      )}
    </Article>
  );
}
