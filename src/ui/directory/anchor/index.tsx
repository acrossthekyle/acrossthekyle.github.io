'use client';

import Link from 'next/link';
import { useContext } from 'react';

import { Context } from '@/contexts/hierarchy';
import { turnStringIntoArrayForList } from '@/utils';

import styles from './stylesheet';

type Props = {
  path: string;
  text: string;
};

export default function Anchor({ path, text }: Props) {
  const { isChild, isParent, pathname } = useContext(Context);

  const isActive = pathname === path;

  const chunks = turnStringIntoArrayForList(text);

  return (
    <Link
      className={styles.container(isParent, isChild, isActive)}
      href={isActive ? `/${path.split('/')[1]}` : path}
    >
      {chunks.map((chunk) => (
        <span className="block" key={chunk}>
          {chunk}
        </span>
      ))}
    </Link>
  );
}
