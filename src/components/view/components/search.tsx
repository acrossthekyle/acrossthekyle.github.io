'use client';

import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { useSearchPostsData } from '@/data/posts';
import Images from '@/images';
import styles from '@/styles/components/view/components/search.module.scss';

import Loading from '../../loading';

type Props = {
  isSearching: boolean;
  onClose: () => void;
};

function Search({ isSearching, onClose }: Props) {
  const [query, updateQuery] = useState('');

  const { data, isLoading, isReady, search } = useSearchPostsData();

  useEffect(() => {
    if (!!query) {
      handleSearch(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(debounce(search, 300), []);

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
            <Images.Icons.Close />
          </button>
          <label
            className={styles.label}
            id="search-label"
            htmlFor="search-input"
          >
            Search for Posts
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
          {isLoading && <Loading />}
          {isReady && !!query && (
            <>
              <h4
                aria-label={`Found ${data.total} search results`}
                className={styles.total}
              >
                {`Found ${data.total} results`}
              </h4>
              <div role="list">
                {data.results.map(({ date, title, uri }) => (
                  <Link
                    aria-label={`${title} ${date}`}
                    className={styles.result}
                    href={uri}
                    onClick={onClose}
                    key={uri}
                    role="listitem"
                    target={
                      title.toLowerCase().includes('resume')
                        ? '_blank'
                        : '_self'
                    }
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
