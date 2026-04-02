import Link from 'next/link';
import { Fragment } from 'react';

import { padIndex } from '@/utils';

import Divider from '../../../divider';

import styles from './stylesheet';

type Props = {
  current?: string;
};

const LINKS = [
  {
    href: '/info/books',
    items: ['Fiction', 'Science Fiction', 'Non-Fiction'],
    phrase: "What I've read",
    title: 'Books',
  },
  {
    href: '/info/gear',
    items: ['Hut-to-hut treks', 'Weekend hikes', 'Summits'],
    phrase: "What I carry on hikes",
    title: 'Gear',
  },
  {
    href: '/info/colophon',
    items: ['Frameworks', 'Tools', 'Inspiration'],
    phrase: "How it's made",
    title: 'Colophon',
  },
];

export default function Footer({ current = '/info' }: Props) {
  return (
    <>
      <Divider />
      <section className={styles.container}>
        <h2 className={styles.header}>
          <span className={styles.eyebrow}>[ 01-x ]</span>
          Extras
          <span className={styles.text}>
            More random tidbits of information about me and this website
          </span>
        </h2>
        <ul className={styles.items}>
          {LINKS.map((item, index: number) => {
            const isActive = current === '/info' ? true : current === item.href;

            return (
              <li className={styles.item} key={item.title}>
                <Link
                  className={styles.link(isActive)}
                  href={item.href}
                >
                  <span className={styles.index(isActive)}>
                    [ 01-x{padIndex(index + 1)} ]
                  </span>
                  {item.title}
                  <span className={styles.list(isActive)}>
                    {item.items.map((line) => (
                      <Fragment key={line}>
                        {line}<br />
                      </Fragment>
                    ))}
                  </span>
                  <span className={styles.footer(isActive)}>
                    {item.phrase}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
