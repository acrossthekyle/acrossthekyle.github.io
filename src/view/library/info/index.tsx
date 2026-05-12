'use client';

import { ArrowDown, ArrowUp, Shuffle } from 'lucide-react';
import { Fragment } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useSort } from '@/hooks/useSort';
import { useView } from '@/hooks/useView';
import type { Collection, Data } from '@/types';

import styles from './stylesheet';
import { getInfo } from './utils';

type Props = {
  collections: Collection[];
  images: Data[];
};

export default function Info({ collections, images }: Props) {
  const { onDialog } = useDialog();
  const { filter } = useFilter();
  const { sort, onSort } = useSort();
  const { view } = useView();

  const { data, title } = getInfo(collections, images, filter, view);

  return (
    <div className={styles.container} key={filter}>
      <h1 className={styles.header}>
        <span className={styles.title}>
          {title}
        </span>
        <small className={styles.subheader}>
          {data.map((value, index: number) => (
            <Fragment key={value}>
              {value}
              {index < data.length - 1 && (
                <span className={styles.divider}>•</span>
              )}
            </Fragment>
          ))}
        </small>
      </h1>
      <ul className={styles.options}>
        <li>
          <button
            aria-label="sort images in ascending order"
            className={styles.option(sort === -1)}
            onClick={() => onSort(-1)}
            type="button"
          >
            <ArrowDown className={styles.icon} />
          </button>
        </li>
        <li>
          <button
            aria-label="sort images in random order"
            className={styles.option(sort === 8)}
            onClick={() => onSort(8)}
            type="button"
          >
            <Shuffle className={styles.icon} />
          </button>
        </li>
        <li>
          <button
            aria-label="sort images in descending order"
            className={styles.option(sort === 1)}
            onClick={() => onSort(1)}
            type="button"
          >
            <ArrowUp className={styles.icon} />
          </button>
        </li>
      </ul>
    </div>
  );
}
