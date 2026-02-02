import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href?: string;
  target?: string;
};

export default function Internal({ children, href = '', target, ...rest }: Props) {
  return (
    <Link
      className={styles.container}
      href={href}
      target={target}
      {...rest}
    >
      {children}
      {target !== '_blank' && <MoveRight className={styles.icon} />}
    </Link>
  );
}
