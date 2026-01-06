import { Eyebrow } from '../../typography';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function ImageEyebrow({ children }: Props) {
  return (
    <Eyebrow className={styles.container}>
      {children}
    </Eyebrow>
  );
}
