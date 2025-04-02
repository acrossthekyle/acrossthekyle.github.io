'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  containerClassName?: string;
  linkClassName: string;
  onClick?: () => void;
};

function Navigation({
  linkClassName,
  containerClassName = '',
  onClick,
}: Props) {
  const { pathname } = useRouter();

  return (
    <ul className={containerClassName}>
      <li className={linkClassName} data-active={pathname === '/'}>
        <Link href="/" onClick={onClick}>
          Blog
        </Link>
      </li>
      <li className={linkClassName} data-active={pathname === '/me'}>
        <Link href="/me" onClick={onClick}>
          About
        </Link>
      </li>
      <li className={linkClassName} data-active={pathname === '/packs'}>
        <Link href="/packs" onClick={onClick}>
          Packs
        </Link>
      </li>
      <li className={linkClassName} data-active={pathname === '/shop'}>
        <Link href="/shop" onClick={onClick}>
          Store
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
