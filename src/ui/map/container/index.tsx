import Image from 'next/image';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <section
      className={styles.container}
      aria-label="map of places visited"
    >
      <Image
        alt=""
        height={432}
        quality={10}
        sizes="30vw"
        src="8e89c52b-87a9-4dca-b6a4-ce67c0ebd197.png"
        width={768}
      />
      {children}
    </section>
  );
}
