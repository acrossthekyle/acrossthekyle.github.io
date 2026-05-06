'use client';

import {
  Bookmark,
  Calendar1,
  Flag,
  Globe,
  Type,
  X,
} from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import type { Collection } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    collection?: Collection;
  };
};

export default function Template({ data }: Props) {
  const { isOpen, onClose } = useDialog();

  if (!data?.collection) {
    return null;
  }

  return (
    <>
      <button
        aria-label="close collection details"
        className={styles.close(isOpen)}
        onClick={onClose}
        type="button"
      >
        <X className={styles.x} />
      </button>
      <div className={styles.container}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Calendar1 className={styles.icon} />
            <p className={styles.data}>
              <span className={styles.label}>When</span>
              {data.collection.when ?? 'Various dates'}
            </p>
          </li>
          <li className={styles.item}>
            <Flag className={styles.icon} />
            <p className={styles.data}>
              <span className={styles.label}>Location</span>
              {data.collection.location === null ? 'Various locations' : (
                <>
                  {data.collection.location.country}, {data.collection.location.continent}
                </>
              )}
            </p>
          </li>
          <li className={styles.item}>
            <Globe className={styles.icon} />
            <p className={styles.data}>
              <span className={styles.label}>Coordinates</span>
              {data.collection.coordinates ?? 'N/A'}
            </p>
          </li>
          <li className={styles.item}>
            <Bookmark className={styles.icon} />
            <p className={styles.data}>
              <span className={styles.label}>Category</span>
              {data.collection.category}
            </p>
          </li>
        </ul>
        <section aria-describedby="notes" className={styles.item}>
          <Type className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label} id="notes">Notes</span>
            {data.collection.notes.map((note) => (
              <p className={styles.paragraph} key={note}>{note}</p>
            ))}
          </div>
        </section>
        <div className={styles.map}>
          <Ui.Map position={data.collection.position} />
        </div>
      </div>
    </>
  );
}
