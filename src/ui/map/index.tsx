import Image from 'next/image';

import Marker from './marker';
import styles from './stylesheet';

type Props = {
  position: string[];
};

export default function Map({ position }: Props) {
  return (
    <div
      className={styles.container}
      role="presentation"
    >
      <div className={styles.inner}>
        <Image
          alt=""
          className={styles.image}
          height={432}
          quality={10}
          sizes="30vw"
          src="8e89c52b-87a9-4dca-b6a4-ce67c0ebd197.png"
          width={768}
        />
        <Marker position={{ left: position[1], top: position[0] }} />
      </div>
    </div>
  );
}
