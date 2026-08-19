'use client';

import Fuse from 'fuse.js';
import { TextSearch } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collections: Collection[];
  onClick: () => void;
};

export default function Search({ collections, onClick }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(collections, {
      keys: ['title'],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [collections]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return collections;
    }

    return fuse.search(query.trim()).map(result => result.item);
  }, [collections, query, fuse]);

  const handleFocus = () => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <>
      <form onSubmit={event => event.preventDefault()}>
        <div className={styles.form}>
          <label className="sr-only" htmlFor="search">
            Search travels
          </label>
          <input
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded={query && results.length > 0 ? true : false}
            aria-haspopup="listbox"
            autoComplete="off"
            className={styles.input}
            id="search"
            onChange={event => setQuery(event.target.value)}
            onFocus={handleFocus}
            placeholder="Search travels"
            role="combobox"
            type="search"
            value={query}
          />
          <TextSearch aria-hidden="true" className={styles.icon} />
        </div>
        <div aria-live="polite" className="sr-only">
          {query && `${results.length} results`}
        </div>
        <ul
          aria-label="search results"
          className={styles.items(isExpanded)}
          id="search-results"
          role="listbox"
        >
          {results.map((item) => {
            return (
              <li
                key={item.id}
                role="option"
                className={styles.item}
              >
                <Link
                  className={styles.link}
                  href={`/travels/${item.id}`}
                  onClick={onClick}
                >
                  <span className={styles.title}>
                    {item.title.join(' ')}
                  </span>
                  <span className={styles.tag}>{item.category}</span>
                  <span className={styles.location}>
                    <span>{item.location.region}</span>
                    &mdash;
                    <span className={styles.emphasis}>
                      {item.location.country}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className={styles.expand}
          onClick={() => setIsExpanded(previous => !previous)}
          type="button"
        >
          Show {isExpanded ? 'Less' : 'All'}
        </button>
      </form>
    </>
  );
};

const styles = tw({
  form: `
    relative
    flex items-center
    px-6 pt-6
    border-t border-current/12.5
  `,
  input: `
    relative
    w-full
    px-4 pl-8 py-2
    text-base
    uppercase
    border border-current/22.5
    rounded-sm

    placeholder:text-xs

    sm:text-tiny
    sm:placeholder:text-tiny
  `,
  icon: `
    absolute left-8
    w-4 h-4
    pointer-events-none
  `,
  items: (isExpanded: boolean) => tw(`
    flex flex-col gap-0
    overflow-hidden
    m-6 mt-4 mb-0
    pt-2

    ${isExpanded ? 'h-auto' : `
      h-[calc(100svh-15.75rem)]
      mask-b-from-90% mask-b-to-100%

      sm:h-[calc(100svh-15.5rem)]
    `}
  `),
  item: `
    pb-4
    border-l border-current/22.5

    last:pb-0
  `,
  link: `
    relative
    flex flex-col gap-1
    pl-6
    text-base

    before:absolute
    before:-inset-1
    before:left-4
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
    lg:text-xs
  `,
  title: `
    font-black
  `,
  tag: `
    relative -left-0.5
    self-start
    text-xs
    rounded-sm
    border border-current/12.5
    p-1 py-0.25

    sm:text-tiny
  `,
  location: `
    flex flex-wrap gap-1
    text-sm

    sm:text-xs
  `,
  emphasis: `
    font-serif italic
  `,
  expand: `
    py-4 px-6
    text-xs text-left
    uppercase
    font-black

    lg:text-tiny
  `,
});
