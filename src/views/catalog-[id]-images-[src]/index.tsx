import type { Collection, Data } from '@/types';
import { Ui } from '@/ui';

import Back from './back';
import Navigation from './navigation';
import styles from './stylesheet';

type Props = {
  data: {
    all: Data[];
    collection: Collection;
    image: Data;
    index: number;
    total: number;
  };
};

export default function View({ data }: Props) {
  return (
    <div className={styles.container}>
      <Back />
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          key={data.image.src}
          size="large"
          src={data.image.src}
          thumb={data.image.thumb}
        />
        <figcaption className={styles.caption}>
          <p className={styles.stack}>
            <span>{data.image.location.region}</span>
            <span>{data.collection.title.join(' ')}</span>
            <span>{data.image.location.country}, {data.image.location.continent}</span>
          </p>
          <p className={styles.stack}>
            <Ui.Units.Length isSmall value={data.image.elevation} />
          </p>
        </figcaption>
      </figure>
      <Navigation
        all={data.all}
        current={data.index}
        id={data.collection.id}
        total={data.total}
      />
    </div>
  );
}
