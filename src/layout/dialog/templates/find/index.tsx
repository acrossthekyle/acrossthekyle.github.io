'use client';

import Fuse from 'fuse.js';
import { ArrowRight, Search, X } from 'lucide-react';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  data?: {
    collections?: Collection[];
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();
  const { onView } = useView();
  const { onFilter } = useFilter();

  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse((data?.collections || []), {
      keys: ['title', 'location', 'tags'],
      threshold: 0.3,
    });
  }, [data]);

  const results = useMemo(() => {
    if (!query) {
      return [];
    }

    return fuse.search(query).map(result => result.item) || [];
  }, [fuse, query]);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value;

    setQuery(term);
  };

  const handleOnChoose = (value: string) => {
    onFilter(value);

    onView('collection');

    onClose();

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const handleOnClear = () => {
    setQuery('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header} id="dialog-header">
        Find a collection
        <span className={styles.subheader}>
          Search by name, location, or category
        </span>
      </h2>
      <button
        aria-label="close search"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        <X className={styles.x} />
      </button>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <label aria-label="search" className={styles.label} htmlFor="search">
          <Search className={styles.placeholder} />
        </label>
        <input
          autoComplete="off"
          autoFocus
          className={styles.input}
          id="search"
          onChange={handleOnchange}
          placeholder=""
          type="text"
          value={query}
        />
        <button
          className={styles.clear}
          onClick={handleOnClear}
          type="button"
        >
          <X className={styles.x} />
        </button>
      </form>
      {results?.length > 0 && (
        <ul aria-label={`${results.length} results`} className={styles.results}>
          {results.map((result) => (
            <li className={styles.result} key={result.id}>
              <button
                aria-label={`view items in ${result.title.toLowerCase()} collection`}
                className={styles.link}
                onClick={() => handleOnChoose(result.id)}
                type="button"
              >
                <span>
                  {result.title} <ArrowRight className={styles.external} />
                </span>
                <span className={`${styles.faded} ${styles.small}`}>
                  {result.location !== null ? (
                    <>{result.location.country}, {result.location.continent}</>
                  ) : (
                    <>Various locations</>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
