'use client';

import Fuse from 'fuse.js';
import Link from 'next/link';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { padIndex } from '@/utils';

import Close from './close'
import styles from './stylesheet';

type Data = {
  date: string | null;
  location: string;
  slug: string;
  title: string[];
  type: string;
};

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fuse, setFuse] = useState<Fuse<Data> | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Data[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (fuse === null) {
      setFuse(new Fuse(data, {
        keys: ['date', 'location', 'title', 'type'],
      }));
    }
  }, [fuse, data]);

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleOnKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setQuery('');
      setResults([]);
    }
  };

  return (
    <dialog className={styles.container} open>
      <Close />
      <input
        autoComplete="off"
        className={styles.field}
        onChange={handleOnSearch}
        onKeyUp={handleOnKeyUp}
        placeholder="Search"
        ref={inputRef}
        type="text"
        value={query}
      />
      {results.length > 0 && (
        <section className={styles.results}>
          <h2 className={styles.heading}>{results.length} results</h2>
          <ul className={styles.list}>
            {results.map((result, index) => (
              <li key={result.slug}>
                <Link className={styles.link} href={`/wanderings/${result.slug}`}>
                  {result.title.map((words, iteration) => (
                    <span className={styles.line} key={iteration}>
                      {words}
                      {iteration === (result.title.length - 1) && (
                        <span className={styles.index}>
                          {padIndex(index + 1)}
                        </span>
                      )}
                    </span>
                  ))}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </dialog>
  );
}
