import { Locate } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  position: {
    left: string;
    top: string;
  };
};

export default function Marker({ position }: Props) {
  return (
    <Locate
      className={styles.marker}
      style={{ top: position.top, left: position.left }}
    />
  );
}
