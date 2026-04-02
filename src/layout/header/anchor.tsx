'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  href: string;
  index: number;
  subtitle: string;
  title: string;
};

export default function Anchor({ href, index, subtitle, title }: Props) {
  const { current } = useHierarchy();

  const isActive = current === '/' ? true : current.includes(href);

  return (
    <Link className={styles.link(isActive)} href={href}>
      <span className={styles.eyebrow(isActive)}>
        [ {padIndex(index + 1)} ]
      </span>
      {title}
      <span className={styles.lid(isActive)}>{subtitle}</span>
    </Link>
  );
}
