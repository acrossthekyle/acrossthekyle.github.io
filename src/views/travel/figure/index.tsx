import type { Stage } from '@/types';

import Caption from './caption';
import Image from './image';
import Maximize from './maximize';
import styles from './stylesheet';

type Props = {
  stage: Stage;
};

export default function Figure({ stage }: Props) {
  return (
    <figure className={styles.figure}>
      <Maximize stage={stage}>
        <Image stage={stage} />
        <Caption stage={stage} />
      </Maximize>
    </figure>
  );
}
