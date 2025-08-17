'use client';

import Article from '@/ui/article';

import Figure from './figure';
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
    <Article>
      <section>
        <ul className={styles.stages}>
          {[...trip.stages].splice(0, shown).map((stage) => (
            <li
              className={styles.stage}
              key={stage.index}
              style={{ animationDelay: `${0.1 + (stage.index * 0.125)}s` }}
            >
              <Figure onMaximize={handleOnMaximize} stage={stage} total={trip.stats.length.value} />
            </li>
          ))}
        </ul>
      </section>
      {shown < Number(trip.stats.length.value) && (
        <footer className={styles.footer}>
          <button
            className={styles.more}
            onClick={handleOnViewMore}
            type="button"
          >
            Load More
          </button>
        </footer>
      )}
    </Article>
  );
}
