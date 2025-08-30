import type { Stage } from '@/types';

import Caption from './caption';
import Image from './image';
import styles from './stylesheet';

type Props = {
  label: string;
  stage: Stage;
  total: string;
};

export default function Figure({ label, stage, total }: Props) {
  return (
    <figure className={styles.figure}>
      <Image stage={stage} />
      <Caption label={label} stage={stage} total={total} />
    </figure>
  );
}
