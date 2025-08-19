'use client';

import { Slash } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import type { Filter } from '@/types';

import Filters from './filters';
import { useModel } from './model';
import styles from './stylesheet';
import { decorateLink } from './utils';

type Item = {
  meta?: string[];
  isApp?: boolean;
  isExternal?: boolean;
  path: string;
  text: string[];
};

type Props = {
  align?: 'end' | 'start';
  filters?: Filter[];
  isLoading?: boolean;
  items: Item[];
};

export default function Directory({
  align = 'end',
  filters,
  isLoading,
  items,
}: Props) {
  const { activeRef, current, filter, isOnChild, previous } = useModel();

  return (
    <aside className={styles.container(isOnChild, align)}>
      {filters && (
        <Filters current={current} filters={filters} isOnChild={isOnChild} />
      )}
      <nav>
        <ul className={styles.list}>
          {isLoading && (
            <>
              {Array.from({ length: 13 }).map((_, index) => (
                <li className={styles.pulse(isOnChild)} key={index} />
              ))}
            </>
          )}
          {!isLoading && items.map((item, index: number) => (
            <li
              className={styles.item}
              key={index}
              ref={current === item.path ? activeRef : undefined}
              style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
            >
              <Link
                className={styles.link(
                  isOnChild,
                  current === item.path,
                )}
                href={decorateLink(
                  isOnChild && current === item.path ? previous : item.path,
                  filter,
                )}
                target={item.isExternal === true ? '_blank' : undefined}
                rel={item.isExternal === true ? 'noreferrer' : undefined}
              >
                <span className={styles.meta}>
                  {(item.meta || []).map((meta, k: number) => (
                    <Fragment key={meta}>
                      <span className={styles.text}>
                        {meta}
                      </span>
                      {(item.meta || []).length > 1 && k === 0 && <Slash className={styles.slash} />}
                    </Fragment>
                  ))}
                </span>
                {item.text.map((word, segment: number) => (
                  <span
                    className={styles.block(
                      item.isExternal === true || item.isApp === true,
                    )}
                    key={word}
                  >
                    {word}
                    {(segment === (item.text.length - 1)) && (
                      <span className={styles.index}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                  </span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
