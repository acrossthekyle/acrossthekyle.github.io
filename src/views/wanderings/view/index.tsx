'use client';

import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

import { useModel } from './model';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const {
    align,
    filterBy,
    handleOnFilter,
    handleOnSort,
    isOnChild,
    items,
    ref,
    sortBy,
  } = useModel(data);

  return (
    <>
      {!isOnChild && (
        <nav
          aria-label="filter wanderings navigation"
          className={styles.options}
        >
          <ul className={styles.list}>
            <li>
              Viewing
              <button
                className={styles.cta}
                onClick={handleOnFilter}
                type="button"
              >
                {filterBy}
              </button>
            </li>
            <li>
              by
              <button
                className={styles.cta}
                onClick={handleOnSort}
                type="button"
              >
                {sortBy}
              </button>
            </li>
          </ul>
        </nav>
      )}
      <Directory align={align} label="wanderings">
        <DirectoryItems>
          {items.map((item, index: number) => (
            <DirectoryItem index={index} key={index}>
              <DirectoryLink href={`/wanderings/${item.slug}`} ref={ref}>
                <DirectoryText index={index} words={item.title} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
    </>
  );
}
