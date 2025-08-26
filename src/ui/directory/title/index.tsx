import Title from '../../title';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function DirectoryTitle({ children }: Props) {
  return (
    <Title className={styles.title}>{children}</Title>
  );
}
