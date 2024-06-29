import Link from 'next/link';

import styles from '@/styles/ui/post/navigation.module.scss';

import posts from '../../posts';
import ArrowIcon from '../icons/arrow';
import Image from '../image';

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
    <div className={styles.navigation}>
      {older && (
        <Link className={styles.previous} href={older.uri}>
          <div className={styles.image}>
            <Image
              alt={older.title}
              height={432}
              quality={50}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={older.image}
              width={768}
            />
          </div>
          <span className={styles.eyebrow}>
            <ArrowIcon left /> {olderLabel}
          </span>
          <h3 className={styles.title}>{older.title}</h3>
        </Link>
      )}
      {newer && (
        <Link className={styles.next} href={newer.uri}>
          <div className={styles.image}>
            <Image
              alt={newer.title}
              height={432}
              quality={50}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={newer.image}
              width={768}
            />
          </div>
          <span className={styles.eyebrow}>
            {newerLabel} <ArrowIcon right />
          </span>
          <h3 className={styles.title}>{newer.title}</h3>
        </Link>
      )}
    </div>
  );
}

export default Navigation;
