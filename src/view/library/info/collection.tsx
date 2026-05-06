'use client';

import { Plus } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  collection: Collection | null;
};

export default function Collection({ collection }: Props) {
  const { onDialog } = useDialog();

  const handleOnDetails = () => {
    if (collection === null) {
      return;
    }

    onDialog({
      data: {
        collection,
      },
      template: 'collection',
    });
  };

  if (collection === null) {
    return null;
  }

  return (
    <>
      <h1 className={styles.header}>
        {collection.title}
        <small className={styles.subheader}>
          {collection.location !== null ? (
            <>{collection.location.country}</>
          ) : (
            <>Various locations</>
          )}
          {collection.year !== null && (
            <>
              <span className={styles.divider}>•</span>
              {collection.year}
            </>
          )}
          <span className={styles.divider}>•</span>
          {collection.count} Photos
        </small>
      </h1>
      <button
        aria-label="view all collection information"
        className={styles.more}
        onClick={handleOnDetails}
        type="button"
      >
        <Plus className={styles.icon} /> Details
      </button>
    </>
  );
}
