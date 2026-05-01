'use client';

import Fuse from 'fuse.js';
import { ArrowRight, Bookmark, Search, X } from 'lucide-react';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data?: {
    albums?: Album[];
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();
  const { onView, view } = useView();
  const { onFilter } = useFilter();

  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse((data?.albums || []), {
      keys: ['title', 'location', 'tags'],
      threshold: 0.3,
    });
  }, [data]);

  const results = useMemo(() => {
    if (!query) {
      return data?.albums || [];
    }

    return fuse.search(query).map(result => result.item) || [];
  }, [fuse, query, data]);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value;

    setQuery(term);
  };

  const handleOnChoose = (type: string, value: string) => {
    onFilter(type, value, view, true);

    onClose();

    onView('library');
  };

  const handleOnClear = () => {
    setQuery('');
  };

  const categories = [...new Set((data?.albums || []).map(({ category }) => category))];

  return (
    <div className={styles.container}>
      <h2 className={styles.header} id="dialog-header">
        Find an album
        <span className={styles.subheader}>
          Search by name, location, category, or filter library by category.
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
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category}>
            <button
              aria-label={`view items in ${category.toLowerCase()} category`}
              className={styles.category}
              onClick={() => handleOnChoose('category', category)}
              type="button"
            >
              <Bookmark className={styles.tag} /> {category}
            </button>
          </li>
        ))}
      </ul>
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
                aria-label={`view items in ${result.title.toLowerCase()} album`}
                className={styles.link}
                onClick={() => handleOnChoose('album', result.id)}
                type="button"
              >
                <span>
                  {result.title} <ArrowRight className={styles.external} />
                </span>
                <span className={`${styles.faded} ${styles.small}`}>
                  {result.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
