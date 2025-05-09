import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';
import type { Posts } from '@/types';

import Image from '../image';

const scss = Styles.Components.Post.Navigation;

type Props = {
  newer?: Posts.Newer;
  newerLabel?: string;
  older?: Posts.Older;
  olderLabel?: string;
};

function Navigation({
  newer,
  newerLabel = 'Newer Post',
  older,
  olderLabel = 'Older Post',
}: Props) {
  return (
    <nav className={scss.navigation} id="navigation">
      {older && (
        <Link className={scss.previous} href={older.uri}>
          <div className={scss.image}>
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
          <span aria-hidden="true" className={scss.eyebrow}>
            <Images.Icons.Arrow left /> {olderLabel}
          </span>
          <h3 aria-label={`Older Post: ${older.title}`} className={scss.title}>
            {older.title}
          </h3>
        </Link>
      )}
      {newer && (
        <Link className={scss.next} href={newer.uri}>
          <div className={scss.image}>
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
          <span aria-hidden="true" className={scss.eyebrow}>
            {newerLabel} <Images.Icons.Arrow right />
          </span>
          <h3 aria-label={`Newer Post: ${newer.title}`} className={scss.title}>
            {newer.title}
          </h3>
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
