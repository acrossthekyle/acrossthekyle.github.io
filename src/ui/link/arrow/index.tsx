import { ArrowUpRight as Icon } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Arrow({ children }: Props) {
  return (
    <>
      {children}<Icon className={styles.icon} />
    </>
  );
}
