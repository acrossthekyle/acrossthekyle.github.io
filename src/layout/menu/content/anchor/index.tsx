'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getRoute } from '@/utils';

import Context from './context';
import Number from './number';
import { styles } from './stylesheet';
import Text from './text';

type Props = {
  id: string;
  index: number;
  onClick?: () => void;
};

function isActive(uri: string, path: string) {
  if (path === '/') {
    if (uri === '/') {
      return true;
    }
  } else if (uri.startsWith(path)) {
    return true
  }

  return false;
};

export default function Anchor({ id, index, onClick }: Props) {
  const route = getRoute(id);

  const pathname = usePathname();

  const isCurrent = isActive(pathname, route.path);
  const isExternal = route.path.includes('https://');

  return (
    <Link
      className={styles.container}
      href={route.path}
      onClick={onClick}
      target={route.path.includes('http://') ? '_blank' : '_self'}
    >
      <Number>{index}</Number>
      <Text isCurrent={isCurrent} isExternal={isExternal}>{route.name}</Text>
      <span className={styles.dash}>&mdash;</span>
      <Context>{route.text}</Context>
    </Link>
  );
}
