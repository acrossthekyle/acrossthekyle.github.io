import { ArrowUpLeft, MoveLeft, MoveRight } from 'lucide-react';
import Link from 'next/link';

import type { Collection, Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    image: Data;
    index: number;
    total: number;
  };
};

export default function View({ data }: Props) {
  return (
    <div className={styles.container}>
      <Link className={styles.back} href={`/index/${data.image.collectionId}`}>
        <ArrowUpLeft className={styles.icon} /> Back
      </Link>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          key={data.image.src}
          size="large"
          src={data.image.src}
          thumb={data.image.thumb}
        />
        <figcaption className={styles.caption}>
          <h1 className={styles.heading}>
            IMG {padIndex(data.index + 1)} / {padIndex(data.total)} &mdash; {data.image.when}
          </h1>
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
      <nav aria-label="supplementary navigation" className={styles.navigation}>
        <Link className={styles.link} href={'/'}>
          <MoveLeft className={styles.arrow} /> Prev
        </Link>
        <button className={styles.link} type="button">
          Camera specs
        </button>
        <Link className={styles.link} href={'/'}>
          Next <MoveRight className={styles.arrow} />
        </Link>
      </nav>
    </div>
  );
}
