import Image from 'next/image';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <section aria-label="map">
      <figure className={styles.container}>
        <Image
          alt=""
          height={1080}
          sizes="(max-width: 768px) 50vw, 33vw"
          src="8e89c52b-87a9-4dca-b6a4-ce67c0ebd197.png"
          width={1920}
        />
        <figcaption>
          <span className={styles.caption}>Map of places I've visited</span>
          {children}
        </figcaption>
      </figure>
    </section>
  );
}
