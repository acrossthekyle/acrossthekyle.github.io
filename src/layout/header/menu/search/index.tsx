'use client';

import Fuse from 'fuse.js';
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';

import tw from '@/styles';
import type { Collection } from '@/types';

import Input from './input';
import Results from './results';

type Props = {
  collections: Collection[];
  isActive: boolean;
  onClick: () => void;
};

export default function Search({ collections, isActive, onClick }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [isOverflowing, setIsOverflowing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    const checkOverflow = () => {
      if (listRef.current) {
        const { scrollHeight, clientHeight } = listRef.current;

        setIsOverflowing(scrollHeight - 4 > clientHeight);
      }
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [results, isExpanded]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!listRef.current) {
      return;
    }

    const focusableElements = Array.from(
      listRef.current.querySelectorAll('a')
    ) as HTMLAnchorElement[];

    const activeElement = document.activeElement;
    const currentIndex = focusableElements.indexOf(activeElement as HTMLAnchorElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();

        if (activeElement === inputRef.current) {
          focusableElements[0]?.focus();
        } else if (currentIndex < focusableElements.length - 1) {
          focusableElements[currentIndex + 1]?.focus();
        }

        break;

      case 'ArrowUp':
        event.preventDefault();

        if (currentIndex === 0) {
          inputRef.current?.focus();
        } else if (currentIndex > 0) {
          focusableElements[currentIndex - 1]?.focus();
        }

        break;

      case 'Escape':
        event.preventDefault();

        setQuery('');

        inputRef.current?.focus();

        break;

      default:
        break;
    }
  };

  const canRenderToggle = isExpanded ? true : isOverflowing;

  return (
    <>
      <form
        onKeyDown={handleKeyDown}
        onSubmit={event => event.preventDefault()}
        role="search"
      >
        <Input
          isActive={isActive}
          onChange={setQuery}
          query={query}
          ref={inputRef}
        />

        <div aria-atomic="true" aria-live="polite" className="sr-only">
          {!!query && `${results.length} results found for ${query}`}
        </div>

        <Results
          isExpanded={isExpanded}
          onClick={onClick}
          ref={listRef}
          results={results}
        />

        {canRenderToggle && (
          <div className={styles.footer(isExpanded)}>
            <button
              aria-expanded={isExpanded}
              aria-controls="search-results"
              className={styles.expand}
              onClick={() => setIsExpanded(previous => !previous)}
              type="button"
            >
              Show {isExpanded ? 'Less' : 'More'}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

const styles = tw({
  footer: (isExpanded: boolean) => tw(`
    ${isExpanded ? 'sticky' : 'absolute'}
    ${isExpanded ? 'bottom-0' : 'bottom-6'}
    z-10
    flex items-end
    ${isExpanded ? 'h-18' : 'h-40'}
    ${isExpanded ? 'pb-6' : 'pb-0'}
    w-full
    bg-linear-to-t
    ${isExpanded ? 'from-(--background)/80' : 'from-(--background)'}
    to-transparent
    pointer-events-none
  `),
  expand: `
    ml-6
    py-1 px-1.5
    text-xs text-left
    uppercase
    font-normal
    bg-(--background)
    border border-current/22.5
    rounded-md
    tracking-wide
    pointer-events-auto

    lg:text-tiny
  `,
});
