'use client';

import Link from 'next/link';

import { useDialog } from '@/hooks/useDialog';
import { LinkArrow } from '@/ui/link';

import type { Data } from '../types';

import Command from './command';
import styles from './stylesheet';

type Props = {
  data: Data[];
};

export default function Results({ data }: Props) {
  const pages = data.filter(({ group }) => group === 'pages');
  const places = data.filter(({ group }) => group === 'places');
  const shortcuts = data.filter(({ group }) => group === 'shortcuts');
  const words = data.filter(({ group }) => group === 'words');

  const { handleOnNavigate } = useDialog();

  return (
    <section aria-label="results" className={styles.container}>
      {pages.length > 0 && (
        <>
          <h3 id="pages">
            # Pages
          </h3>
          <ul aria-labelledby="pages" className={styles.list}>
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  className={styles.item}
                  href={page.path}
                  onClick={handleOnNavigate}
                  target={page.path.includes('http') ? '_blank' : undefined}
                >
                  {page.path.includes('http') ? (
                    <LinkArrow>{page.text}</LinkArrow>
                  ) : (
                    <>{page.text}</>
                  )}
                  <small>{page.subtitle}</small>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {places.length > 0 && (
        <>
          <h3 id="places">
            # Places
          </h3>
          <ul aria-labelledby="places" className={styles.list}>
            {places.map((place) => (
              <li key={place.path}>
                <Link
                  className={styles.item}
                  href={place.path}
                  onClick={handleOnNavigate}
                >
                  {place.text}
                  <small>{place.subtitle}</small>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {words.length > 0 && (
        <>
          <h3 id="words">
            # Words
          </h3>
          <ul aria-labelledby="words" className={styles.list}>
            {words.map((word) => (
              <li key={word.path}>
                <Link
                  className={styles.item}
                  href={word.path}
                  onClick={handleOnNavigate}
                >
                  {word.text}
                  <small>{word.subtitle}</small>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {shortcuts.length > 0 && (
        <>
          <h3 id="settings">
            # Settings
          </h3>
          <ul aria-labelledby="settings" className={styles.list}>
            {shortcuts.map((shortcut) => (
              <li key={shortcut.command}>
                <Command
                  command={shortcut.command}
                  subtitle={shortcut.subtitle}
                  text={shortcut.text}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
