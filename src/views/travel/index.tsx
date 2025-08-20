'use client';

import Section from '@/ui/section';

import Figure from './figure';
import Header from './header';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnMaximize, handleOnViewMore, shown, trip } = useModel(slug);

  if (!trip) {
    return null;
  }

  return (
    <Section>
      <Header date={trip.date} title={trip.title} type={trip.type} />
      <ul className={styles.stages}>
        {[...trip.stages].splice(0, shown).map((stage) => (
          <li
            className={styles.stage}
            key={stage.index}
            style={{ animationDelay: `${0.1 + (stage.index * 0.125)}s` }}
          >
            <Figure
              label={trip.label}
              onMaximize={handleOnMaximize}
              stage={stage}
              total={trip.stats.length.value}
            />
          </li>
        ))}
      </ul>
      {shown < Number(trip.stats.length.value) && (
        <button
          className={styles.more}
          onClick={handleOnViewMore}
          type="button"
        >
          Load More
        </button>
      )}
    </Section>
  );
}
