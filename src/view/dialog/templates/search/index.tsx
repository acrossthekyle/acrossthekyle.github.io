'use client';

import Fuse from 'fuse.js';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

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

  const [fuse, setFuse] = useState<Fuse<Album[]> | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Album[]>([]);

  useEffect(() => {
    if (fuse === null) {
      setFuse(new Fuse(data.albums, {
        keys: ['title'],
      }));
    }
  }, [fuse, data]);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value.toLowerCase();

    setQuery(term);

    if (term.length === 0) {
      setResults([]);

      return;
    }

    if (fuse !== null) {
      setResults(fuse.search(term).map((result) => result.item));
    }
  };

  const handleOnChoose = () => {
    onClose();

    onChange('library');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <input
          autoComplete="off"
          autoFocus
          className={styles.input}
          onChange={handleOnchange}
          placeholder="Search albums"
          type="text"
          value={query}
        />
      </form>
      {results.length > 0 && (
        <ul aria-label={`${results.length} results`} className={styles.results}>
          {results.map((result) => (
            <li key={result.id}>
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
