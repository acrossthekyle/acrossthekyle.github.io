import Link from 'next/link';

import { padIndex } from '@/utils';

import type { More } from '../types';

import styles from './stylesheet';

type Props = {
  more: More[];
};

export default function Footer({ more }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        [More]
      </h2>
      <ul className={styles.items}>
        {more.map((item, index: number) => {
          return (
            <li className={styles.item} key={item.title}>
              <Link
                className={styles.link}
                href={`/trails/${item.id}`}
              >
                <span className={styles.index}>
                  [ 00-{padIndex(index + 1)} ]
                </span>
                {item.title}
                <span className={styles.list}>
                  {item.when}<br />
                  {item.coordinates}<br />
                  {item.location}<br />
                </span>
                <span className={styles.footer}>
                  {item.type}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
