'use client';

import Fuse from 'fuse.js';
import { ArrowRight, Bookmark, LayoutDashboard, Search } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

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
  const { onChange } = useView();

  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(data.albums, {
      keys: ['title', 'location'],
      threshold: 0.3,
    });
  }, [data]);

  const results = useMemo(() => {
    if (!query) {
      return data;
    }

    return fuse.search(query).map(result => result.item);
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

    onChange('library');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Find an album
        <span className={styles.subheader}>
          Search by name or location, or choose a category
        </span>
      </h2>
      <ul className={styles.categories}>
        <li>
          <Link
            className={styles.category}
            href="?c=backpacking"
            onClick={handleOnChoose}
          >
            <Bookmark className={styles.tag} /> Backpacking
          </Link>
        </li>
        <li>
          <Link
            className={styles.category}
            href="?c=basecamps"
            onClick={handleOnChoose}
          >
            <Bookmark className={styles.tag} /> Basecamps
          </Link>
        </li>
        <li>
          <Link
            className={styles.category}
            href="?c=cities"
            onClick={handleOnChoose}
          >
            <Bookmark className={styles.tag} /> Cities
          </Link>
        </li>
        <li>
          <Link
            className={styles.category}
            href="?c=destinations"
            onClick={handleOnChoose}
          >
            <Bookmark className={styles.tag} /> Destinations
          </Link>
        </li>
        <li>
          <Link
            className={styles.category}
            href="?c=mountains"
            onClick={handleOnChoose}
          >
            <Bookmark className={styles.tag} /> Mountains
          </Link>
        </li>
      </ul>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <Search className={styles.placeholder} />
        <input
          autoComplete="off"
          autoFocus
          className={styles.input}
          onChange={handleOnchange}
          placeholder=""
          type="text"
          value={query}
        />
      </form>
      {results.length > 0 && (
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
