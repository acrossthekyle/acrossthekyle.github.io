'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

type Item = {
  isApp?: boolean;
  isExternal?: boolean;
  path: string;
  text: string[];
};

type Props = {
  align: 'end' | 'start';
  items: Item[];
};

export default function Directory({ align = 'end', items }: Props) {
  const { activeRef, current, isOnChild, previous } = useModel();

  return (
    <aside className={styles.container(isOnChild, align)}>
      <nav>
        <ul className={styles.list(align)}>
          {items.map((item, index: number) => (
            <li
              className={styles.item}
              key={index}
              ref={current === item.path ? activeRef : undefined}
              style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
            >
              <Link
                className={styles.link(isOnChild, current === item.path)}
                href={isOnChild && current === item.path ? previous : item.path}
                target={item.isExternal === true ? '_blank' : undefined}
                rel={item.isExternal === true ? 'noreferrer' : undefined}
              >
                {item.text.map((word) => (
                  <span
                    className={styles.block(
                      item.isExternal === true || item.isApp === true,
                    )}
                    key={word}
                  >
                    {word}
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
