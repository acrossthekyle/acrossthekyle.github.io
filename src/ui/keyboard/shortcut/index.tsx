import Kbd from '../kbd';
import Symbol from '../symbol';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Shortcut({ children }: Props) {
  return (
    <Kbd>
      <Symbol value="cmdCtrl" />+<span className={styles.container}>{children}</span>
    </Kbd>
  );
}
