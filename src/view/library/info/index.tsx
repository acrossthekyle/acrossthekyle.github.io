'use client';

import { ArrowDown, ArrowUp, TextAlignCenter } from 'lucide-react';
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
  const { onSort } = useSort();
  const { view } = useView();

  const { collection, data, title } = getInfo(collections, images, filter, view);

  const handleOnCollection = () => {
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
            className={styles.option}
            onClick={() => onSort(-1)}
            type="button"
          >
            <ArrowDown className={styles.icon} />
          </button>
        </li>
        {view === 'collection' && (
          <li>
            <button
              aria-label="view collection information"
              className={styles.option}
              onClick={handleOnCollection}
              type="button"
            >
              <TextAlignCenter className={styles.icon} />
            </button>
          </li>
        )}
        <li>
          <button
            aria-label="sort images in descending order"
            className={styles.option}
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
