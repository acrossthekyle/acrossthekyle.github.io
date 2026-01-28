import { ArrowLeft as Icon } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Back({ children }: Props) {
  return (
    <>
      <Icon className={styles.icon} /> {children}
    </>
  );
}
