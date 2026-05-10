'use client';

import Fuse from 'fuse.js';
import { Search } from 'lucide-react';
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
      return data?.collections || [];
    }

    return fuse.search(query).map(result => result.item) || [];
  }, [data?.collections, fuse, query]);

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
  };

  const handleOnClear = () => {
    setQuery('');

    onClose();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <label aria-label="search" className={styles.label} htmlFor="search">
          <Search className={styles.placeholder} />
        </label>
        <input
          autoComplete="off"
          className={styles.input}
          id="search"
          onChange={handleOnchange}
          placeholder="Search collections"
          type="text"
          value={query}
        />
        <button
          className={styles.clear}
          onClick={handleOnClear}
          type="button"
        >
          ESC
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
                {result.title}
                <span className={styles.badge}>{result.category}</span>
                <span className={`${styles.small}`}>
                  {result.location !== null ? (
                    <>
                      {result.location.country} {result.year !== null && (
                        <>&mdash; {result.year}</>
                      )}
                    </>
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
