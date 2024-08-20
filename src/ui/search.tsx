'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/search.module.scss';

import posts from '../posts';

import CloseIcon from './icons/close';

type Props = {
  isSearching: boolean;
  onClose: () => void;
};

const LOCATIONS = posts
  .getArray()
  .map(({ locationFull }) => locationFull.toLowerCase())
  .filter((value, index, items) => items.indexOf(value) === index);

const TITLES = posts
  .getArray()
  .map(({ title }) => title.toLowerCase())
  .filter((value, index, items) => items.indexOf(value) === index);

function Search({ isSearching, onClose }: Props) {
  const [query, updateQuery] = useState('');
  const [results, setResults] = useState([]);

  const filterPosts = () => {
    if (!!query.trim()) {
      const filtered = [...posts.getArray()];

      query
        .trim()
        .split(' ')
        .forEach((part) => {
          const lowered = part.toLowerCase();

          if (/^\d{4}$/.test(lowered)) {
            setResults(filtered.filter(({ date }) => date.includes(lowered)));

            return;
          }

          const matchedLocations = LOCATIONS.filter((_) => _.includes(lowered));
          const matchedTitles = TITLES.filter((_) => _.includes(lowered));

          if (matchedLocations.length > 0 && matchedTitles.length > 0) {
            setResults(
              filtered.filter(({ locationFull, title }) => {
                return (
                  locationFull.toLowerCase().includes(lowered) ||
                  title.toLowerCase().includes(lowered)
                );
              }),
            );
          } else if (matchedLocations.length > 0) {
            setResults(
              filtered.filter(({ locationFull }) => {
                return locationFull.toLowerCase().includes(lowered);
              }),
            );
          } else if (matchedTitles.length > 0) {
            setResults(
              filtered.filter(({ title }) => {
                return title.toLowerCase().includes(lowered);
              }),
            );
          } else {
            setResults([]);
          }
        });
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    filterPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateQuery((event.target as HTMLInputElement).value.toLowerCase());
  };

  return (
    <div className={styles.find} data-active={isSearching}>
      <div className={styles.container}>
        <div className={styles.input}>
          <button className={styles.close} onClick={onClose} type="button">
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
