import { Locate } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  invert?: boolean;
  position: {
    left: string;
    top: string;
  };
};

export default function Marker({ invert, position }: Props) {
  return (
    <Locate
      className={styles.container(invert)}
      style={{ top: position.top, left: position.left }}
    />
  );
}
