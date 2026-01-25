import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  asButton?: boolean;
  children: React.ReactNode | React.ReactNode[];
  href?: string;
  onClick?: () => void;
};

export default function Italic({ asButton, children, href = '', onClick, ...rest }: Props) {
  if (asButton) {
    return (
      <button className={styles.container(asButton)} onClick={onClick} type="button" {...rest}>
        <em>{children}</em>
        <MoveRight className={styles.icon} />
      </button>
    );
  }

  return (
    <Link
      className={styles.container(false)}
      href={href}
      {...rest}
    >
      <em>{children}</em>
      <MoveRight className={styles.icon} />
    </Link>
  );
}
