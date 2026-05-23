'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import { getDelay } from '@/utils';

import styles from './stylesheet';

type Props = {
  href: string;
  index: number;
  isPreview: boolean;
  parent: number;
};

export default function Cell({
  children,
  href,
  index,
  isPreview,
  parent,
}: React.PropsWithChildren<Props>) {
  return (
    <InView threshold={0.1} triggerOnce>
      {({ inView, ref }) => (
        <li
          className={styles.cell(parent, index)}
          data-in-view={inView}
          ref={ref}
        >
          {isPreview ? (
            <div className={styles.quadrants}>
              {children}
            </div>
          ) : (
            <Link
              className={`${styles.quadrants} ${styles.anchor}`}
              href={href}
            >
              {children}
            </Link>
          )}
        </li>
      )}
    </InView>
  );
}
