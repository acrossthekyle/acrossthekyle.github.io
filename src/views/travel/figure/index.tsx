import type { Stage } from '@/types';

import Caption from './caption';
import Gallery from './gallery';
import styles from './stylesheet';

type Props = {
  label: string;
  stage: Stage;
  total: string;
};

export default function Figure({ label, stage, total }: Props) {
  return (
    <figure className={styles.figure}>
      <Gallery stage={stage} />
      <Caption label={label} stage={stage} total={total} />
    </figure>
  );
}
