import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
};

export default function Stacked({ children, href }: Props) {
  return (
    <Link
      className={styles.container}
      href={href}
    >
      {children}
    </Link>
  );
}
