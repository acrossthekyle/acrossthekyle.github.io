import { Locate } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  href?: string;
  position: {
    left: string;
    top: string;
  };
  title?: string;
};

export default function Marker({ href, position, title }: Props) {
  if (href) {
    return (
      <Link href={href} title={title}>
        <Locate
          className={styles.container}
          style={{ top: position.top, left: position.left }}
        />
      </Link>
    );
  }

  return (
    <Locate
      className={styles.container}
      style={{ top: position.top, left: position.left }}
    />
  );
}
