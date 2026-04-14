'use client';

import Link from 'next/link';
import { useContext } from 'react';

import { TrailContext } from './context';
import styles from './stylesheet';

type Props = {
  id: string;
};

export default function View({ children, id }: React.ChildrenWithProps<Props>) {
  const { onHover } = useContext(TrailContext);

  return (
    <Link
      className={styles.link}
      href={`/trails/${id}`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {children}
    </Link>
  );
}
