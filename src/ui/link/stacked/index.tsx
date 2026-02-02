import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  id?: string;
  target?: string;
};

export default function Stacked({ children, href, id, target }: Props) {
  return (
    <Link
      className={styles.container}
      href={href}
      id={id}
      target={target}
    >
      {children}
    </Link>
  );
}
