import Link from 'next/link';

import Images from '@/images';
import styles from '@/styles/components/pages/posts/navigation.module.scss';

import Image from '../../image';

type Result = {
  image: string;
  title: string;
  uri: string;
};

type Props = {
  newer?: Result;
  newerLabel?: string;
  older?: Result;
  olderLabel?: string;
};

function Navigation({
  newer,
  newerLabel = 'Newer Post',
  older,
  olderLabel = 'Older Post',
}: Props) {
  return (
    <div className={styles.navigation} id="navigation">
      {older && (
        <Link className={styles.previous} href={older.uri}>
          <div className={styles.image}>
            <Image
              alt={older.title}
              aria-hidden="true"
              height={432}
              quality={50}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={older.image}
              width={768}
            />
          </div>
          <span aria-hidden="true" className={styles.eyebrow}>
            <Images.Icons.Arrow left /> {olderLabel}
          </span>
          <h3
            aria-label={`Older Post: ${older.title}`}
            className={styles.title}
          >
            {older.title}
          </h3>
        </Link>
      )}
      {newer && (
        <Link className={styles.next} href={newer.uri}>
          <div className={styles.image}>
            <Image
              alt={newer.title}
              aria-hidden="true"
              height={432}
              quality={50}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={newer.image}
              width={768}
            />
          </div>
          <span aria-hidden="true" className={styles.eyebrow}>
            {newerLabel} <Images.Icons.Arrow right />
          </span>
          <h3
            aria-label={`Newer Post: ${newer.title}`}
            className={styles.title}
          >
            {newer.title}
          </h3>
        </Link>
      )}
    </div>
  );
}

export default Navigation;
