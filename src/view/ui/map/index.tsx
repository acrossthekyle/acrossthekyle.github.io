import Image from 'next/image';

import Marker from './marker';
import styles from './stylesheet';

type Props = {
  className?: string;
  position: {
    left: string;
    top: string;
  };
};

export default function Container({
  className = '',
  position,
}: Props) {
  return (
    <figure className={`${styles.container} ${className}`.trim()}>
      <Image
        alt=""
        height={432}
        quality={10}
        sizes="30vw"
        src="8e89c52b-87a9-4dca-b6a4-ce67c0ebd197.png"
        width={768}
      />
      <Marker position={position} />
    </figure>
  );
}
