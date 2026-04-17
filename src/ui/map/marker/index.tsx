import { Locate } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  highlight?: boolean;
  invert?: boolean;
  position: {
    left: string;
    top: string;
  };
};

export default function Marker({ highlight, invert, position }: Props) {
  return (
    <Locate
      className={styles.container(highlight, invert)}
      style={{ top: position.top, left: position.left }}
    />
  );
}
