import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  target?: string;
};

export default function Backdrop({ children, href, target }: Props) {
  return (
    <Link className={styles.container} href={href} target={target}>
      {children}
    </Link>
  );
}
