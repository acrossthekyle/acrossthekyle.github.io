import { Image } from '../../image';

import styles from './stylesheet';

type Props = {
  src?: string;
};

export default function Picture({ src }: Props) {
  if (src === undefined) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        size="large"
        src={src}
      />
    </div>
  );
}
