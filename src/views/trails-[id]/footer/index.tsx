import Link from 'next/link';
import { Fragment } from 'react';

import { padIndex } from '@/utils';

import Divider from '@/ui/divider';

import styles from './stylesheet';

type Props = {
  type: string;
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

export default function Footer({ type }: Props) {
  return (
    <>
      <Divider />
      <section className={styles.container}>
        <h2 className={styles.header}>
          <span className={styles.eyebrow}>[ 02-M ]</span>
          More
          <span className={styles.text}>
            Related {type}s
          </span>
        </h2>
        <ul className={styles.items}>
          {LINKS.map((item, index: number) => {
            return (
              <li className={styles.item} key={item.title}>
                <Link
                  className={styles.link}
                  href={item.href}
                >
                  <span className={styles.index}>
                    [ 01-x{padIndex(index + 1)} ]
                  </span>
                  {item.title}
                  <span className={styles.list}>
                    {item.items.map((line) => (
                      <Fragment key={line}>
                        {line}<br />
                      </Fragment>
                    ))}
                  </span>
                  <span className={styles.footer}>
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
