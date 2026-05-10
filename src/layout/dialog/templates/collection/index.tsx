'use client';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    collection?: Collection;
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();
  const { onFilter } = useFilter();
  const { onView } = useView();

  const handleOnCategory = () => {
    if (!data?.collection) {
      return;
    }

    onFilter(data.collection.category);

    onView('category');

    onClose();
  };

  const handleOnLocation = () => {
    if (!data?.collection) {
      return;
    }

    onFilter(data.collection.location.continent);

    onView('continent');

    onClose();
  };

  const handleOnCollections = () => {
    onFilter(null);

    onView('collections');

    onClose();
  };

  if (!data?.collection) {
    return null;
  }

  return (
    <article className={styles.container}>
      <h2 className={styles.header} id="dialog-header">
        {data.collection.title}
        <span className={styles.subheader}>
          {data.collection.when}
        </span>
      </h2>
      <button
        aria-label="close collection details"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        ESC
      </button>
      <section aria-label="overview" className={styles.content}>
        <div className={styles.notes}>
          {data.collection.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
        <aside className={styles.aside}>
          <Ui.Map position={data.collection.position} />
        </aside>
      </section>
      <footer className={styles.footer}>
        <ul className={styles.tags}>
          <li>
            <button
              className={styles.tag}
              onClick={handleOnCollections}
              type="button"
            >
              Collections
            </button>
          </li>
          <li>
            <button
              className={styles.tag}
              onClick={handleOnCategory}
              type="button"
            >
              {data.collection.category}
            </button>
          </li>
          <li>
            <button
              className={styles.tag}
              onClick={handleOnLocation}
              type="button"
            >
              {data.collection.location.continent}
            </button>
          </li>
        </ul>
        <span className={styles.coordinates}>
          {data.collection.coordinates}
        </span>
      </footer>
    </article>
  );
}
