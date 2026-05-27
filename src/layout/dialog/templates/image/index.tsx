import type { Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

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
        <figcaption className={styles.caption}>
          <span />
          <span />
          <span className={styles.location}>
            {data.image.when} &mdash; {data.image.location.region}, {data.image.location.country}
          </span>
          <span className={styles.elevation}>
            <Ui.Units.Length isSmall value={data.image.elevation} />
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
