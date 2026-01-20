import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  noMargin?: boolean;
};

export default function Stacked({ children, href, noMargin }: Props) {
  return (
    <Link
      className={styles.container(noMargin)}
      href={href}
    >
      {children}
    </Link>
  );
}
