import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  parameter?: string;
};

export default function FilterLink({
  children,
  parameter,
}: Props) {
  const searchParams = useSearchParams();

  const { base } = useHierarchy();

  return (
    <Link
      className={styles.link(parameter === searchParams.get('filter'))}
      href={`${base}${parameter ? `?filter=${parameter}` : ''}`}
    >
      {children}
    </Link>
  );
}
