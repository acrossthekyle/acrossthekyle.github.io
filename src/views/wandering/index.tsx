'use client';

import { Plus } from 'lucide-react';

import Article from '@/ui/article';

import Figure from './figure';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnMaximize, handleOnViewMore, shown, stats, trip } = useModel(slug);

  if (!trip) {
    return null;
  }

  return (
    <Article>
      <header className={styles.header}>
        <ul className={styles.categories}>
          {trip.categories.map((category) => (
            <li className={styles.category} key={category}>{category}</li>
          ))}
        </ul>
        <h1 className={styles.title}>
          {trip.title.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h1>
        <h2 className={styles.subtitle}>
          {trip.type} <span className={styles.stats}>{stats}</span> in {trip.location}
          <span className={styles.date}>
            {trip.date.dates ? (
              <>
                from {trip.date.dates.start.short.month}{' '}
                {trip.date.dates.start.short.day}
                {' '}-{' '}
                {trip.date.dates.end.short.month}{' '}
                {trip.date.dates.end.short.day} {trip.date.year}
              </>
            ) : (
              <>
                from {trip.date.year.join(' - ')}
              </>
            )}
          </span>
        </h2>
      </header>
      <section>
        <ul className={styles.stages}>
          {[...trip.stages].splice(0, shown).map((stage) => (
            <li
              className={styles.stage}
              key={stage.index}
              style={{ animationDelay: `${0.1 + (stage.index * 0.125)}s` }}
            >
              <Figure onMaximize={handleOnMaximize} stage={stage} />
            </li>
          ))}
        </ul>
      </section>
      {shown < trip.stats.length.value && (
        <footer className={styles.footer}>
          <button
            className={styles.more}
            onClick={handleOnViewMore}
            type="button"
          >
            <Plus className={styles.plus} />
          </button>
        </footer>
      )}
    </Article>
  );
}
