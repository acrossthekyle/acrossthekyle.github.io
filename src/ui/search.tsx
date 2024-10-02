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
    <div className={styles.find} data-active={isSearching}>
      <div className={styles.container}>
        <div className={styles.input}>
          <button
            className={styles.close}
            onClick={onClose}
            title="Close search"
            type="button"
          >
            <CloseIcon />
          </button>
          <label className={styles.label} htmlFor="search-input">
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
        <div className={styles.results} data-active={results.length > 0}>
          <h4 className={styles.total}>Found: {results.length}</h4>
          {results.map(({ date, title, uri }) => (
            <div className={styles.result} key={uri}>
              <Link href={uri} onClick={onClose}>
                <div className={styles.title}>{title}</div>
                <span className={styles.date}>
                  <time>{date}</time>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
