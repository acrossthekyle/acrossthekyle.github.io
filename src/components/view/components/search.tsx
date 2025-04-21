'use client';

import Fuse from 'fuse.js';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

import { posts } from '@/cache/posts';
import Images from '@/images';
import Styles from '@/styles';
import type { Posts } from '@/types';

const scss = Styles.Components.View.Components.Search;

type Props = {
  isSearching: boolean;
  onClose: () => void;
};

function Search({ isSearching, onClose }: Props) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value.toLowerCase();

    setQuery(term);

    if (term.length === 0) {
      setResults([]);

      return;
    }

    const fuse = new Fuse(posts, {
      keys: ['date', 'location', 'title'],
    });

    setResults(fuse.search(term).map((result) => result.item));
  };

  return (
    <div
      aria-labelledby="search-label"
      aria-modal="true"
      className={scss.find}
      data-active={isSearching}
      role="dialog"
      tabIndex={-1}
    >
      <div className={scss.container}>
        <div className={scss.input}>
          <button
            aria-label="Close Search"
            className={scss.close}
            onClick={onClose}
            title="Close search"
            type="button"
          >
            <Images.Icons.Close />
          </button>
          <label
            className={scss.label}
            id="search-label"
            htmlFor="search-input"
          >
            Search posts
          </label>
          <input
            autoComplete="off"
            className={scss.field}
            id="search-input"
            onChange={handleOnSearch}
            placeholder="Search posts..."
            type="text"
            value={query}
          />
        </div>
        {results.length > 0 && (
          <div className={scss.results}>
            <h2 className={scss.total}>{`Found ${results.length} results`}</h2>
            <div role="list">
              {results.map(({ date, title, uri }: Posts.Post) => (
                <div className={scss.result} key={uri} role="listitem">
                  <h3>
                    <Link
                      aria-label={`${title} ${date}`}
                      href={uri}
                      onClick={onClose}
                      target="_self"
                    >
                      {title}
                    </Link>
                  </h3>
                  <div className={scss.date}>
                    <time>{date}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
