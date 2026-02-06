import { ArrowUpRight } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Arrow({ children }: Props) {
  return (
    <>
      {children}<ArrowUpRight className={styles.icon} />
    </>
  );
}
