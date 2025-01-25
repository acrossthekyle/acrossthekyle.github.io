'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/search.module.scss';

import posts from '../posts';

import CloseIcon from './icons/close';
import {
  filterByQuery,
  getAllUniqueLocations,
  getAllUniqueTitles,
} from './search.utils';

type Props = {
  isSearching: boolean;
  onClose: () => void;
};

const LOCATIONS = getAllUniqueLocations(posts);
const TITLES = getAllUniqueTitles(posts);

function Search({ isSearching, onClose }: Props) {
  const [query, updateQuery] = useState('');
  const [results, setResults] = useState([]);

  const filterPostsByQuery = () => {
    setResults(filterByQuery(query, posts, TITLES, LOCATIONS));
  };

  useEffect(() => {
    filterPostsByQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateQuery((event.target as HTMLInputElement).value.toLowerCase());
  };

  return (
    <div
      aria-labelledby="search-label"
      aria-modal="true"
      className={styles.find}
      data-active={isSearching}
      role="dialog"
      tabIndex={-1}
    >
      <div className={styles.container}>
        <div className={styles.input}>
          <button
            aria-label="Close Search"
            className={styles.close}
            onClick={onClose}
            title="Close search"
            type="button"
          >
            <CloseIcon />
          </button>
          <label
            className={styles.label}
            id="search-label"
            htmlFor="search-input"
          >
            Search for Post
          </label>
          <input
            autoComplete="off"
            className={styles.field}
            id="search-input"
            onChange={handleOnSearch}
            placeholder="Type to search..."
            type="text"
            value={query}
          />
        </div>
        <div className={styles.results}>
          {!!query && (
            <h4
              aria-label={`Found ${results.length} search results`}
              className={styles.total}
            >
              {`Found ${results.length} results`}
            </h4>
          )}
          <div role="list">
            {results.map(({ date, target, title, uri }) => (
              <Link
                aria-label={`${title} ${date}`}
                className={styles.result}
                href={uri}
                onClick={onClose}
                key={uri}
                role="listitem"
                target={target ?? undefined}
              >
                <div aria-hidden="true" className={styles.title}>
                  {title}
                </div>
                <span aria-hidden="true" className={styles.date}>
                  <time>{date}</time>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
