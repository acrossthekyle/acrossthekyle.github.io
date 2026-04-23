'use client';

import Fuse from 'fuse.js';
import { ArrowRight, Bookmark, LayoutDashboard, Search, X } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
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
  const { onView } = useView();

  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse((data?.albums || []), {
      keys: ['title', 'location'],
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
    const term = (event.target as HTMLInputElement).value.toLowerCase();

    setQuery(term);
  };

  const handleOnChoose = () => {
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
          Search by name or location, or choose a category
        </span>
      </h2>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category}>
            <Link
              className={styles.category}
              href={`?c=${category}`}
              onClick={handleOnChoose}
            >
              <Bookmark className={styles.tag} /> {category}
            </Link>
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
              <Link
                className={styles.link}
                href={`?a=${result.id}`}
                onClick={handleOnChoose}
              >
                <span aria-hidden="true" className={styles.prefix}>
                  <LayoutDashboard className={styles.icon} />
                </span>
                <span>
                  <span className={styles.faded}>Album</span>
                  {result.title} <ArrowRight className={styles.external} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
