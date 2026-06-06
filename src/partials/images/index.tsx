import Link from 'next/link';

import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {};

export default function Images({ images }: Props) {
  return (
    <section className={styles.container}>
      <ul className={styles.images}>
        {images.map((image, index) => (
          <li key={image.src}>
            <Link
              className={styles.link}
              href={`/index/${image.collectionId}/images/${image.src.split('/').pop()}`}
              scroll={false}
            >
              <Ui.Image
                className={styles.image(index)}
                key={image.src}
                src={image.src}
                thumb={image.thumb}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
