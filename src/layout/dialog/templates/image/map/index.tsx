import Image from 'next/image';

import Marker from './marker';
import styles from './stylesheet';

type Props = {
  canRender: boolean;
  index: number;
  position: string[];
};

export default function Container({ canRender, index, position }: Props) {
  return (
    <div
      className={styles.container(canRender)}
      role="presentation"
      style={{ transitionDelay: `${index * 0.125}s` }}
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
