import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  if (!data?.image) {
    return null;
  }

  return (
    <figure className={styles.container}>
      <Ui.Image
        className={styles.image}
        priority
        size="large"
        src={data.image.src}
        thumb={data.image.thumb}
      />
      <figcaption className={styles.caption}>
        <span>{data.image.title}</span>
        <span className={styles.divider} role="presentation">•</span>
        <span>{data.image.location.region}, {data.image.location.country}</span>
        <span className={styles.divider} role="presentation">•</span>
        <Ui.Units.Length isSmall value={data.image.elevation} />
      </figcaption>
    </figure>
  );
}
