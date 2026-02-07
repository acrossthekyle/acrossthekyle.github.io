import Link from 'next/link';

import Menu from './menu';

type Props = {
  isRoot: boolean;
}

export default function Header({ isRoot }: Props) {
  return (
    <header>
      <Link aria-label="acrossthekyle.com home" href="/">
        K.
      </Link>
      {!isRoot && (
        <Menu />
      )}
    </header>
  );
}
