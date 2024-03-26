import Link from 'next/link';

import travels from 'data/travels';
import styles from 'scss/app/gallery/page.module.scss'

export default function Page() {
  return (
    <section className={styles.gallery}>
      {travels.map(({ id, image, year }) => (
        <div key={id}>
          <Link href={`/travels/${year}/${id}`}>
            <img src={image} />
          </Link>
        </div>
      ))}
    </section>
  );
}
