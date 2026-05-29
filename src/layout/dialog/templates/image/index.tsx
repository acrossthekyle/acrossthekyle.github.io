import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    image?: Data & {
      index: number;
    };
  };
};

export default function Template({ data }: Props) {
  if (!data?.image) {
    return null;
  }

  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          size="large"
          src={data.image.src}
          thumb={data.image.thumb}
        />
      </figure>
    </div>
  );
}
