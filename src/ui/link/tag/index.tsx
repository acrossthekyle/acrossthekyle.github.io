import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  isModal?: boolean;
};

export default function Tag({ children, href, isModal }: Props) {
  return (
    <Link className={styles.container} href={href}>
      {children}
      {!isModal && (
        <ArrowRight className={styles.icon} />
      )}
    </Link>
  );
}
