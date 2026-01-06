import { Subtitle } from '../../typography';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function ImageSubtitle({ children }: Props) {
  return (
    <Subtitle className={styles.container}>
      {children}
    </Subtitle>
  );
}
