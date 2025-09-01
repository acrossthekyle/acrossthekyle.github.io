import { Slash } from 'lucide-react';
import { Fragment } from 'react';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  text?: string[];
};

export default function DirectoryEyebrow({ children, text }: Props) {
  return (
    <span className={styles.eyebrow}>
      {children}
      {(text || []).map((meta, index: number) => (
        <Fragment key={meta}>
          <span className={styles.text}>
            {meta}
            {(index !== (text || []).length - 1) && (
              <Slash className={styles.slash} />
            )}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
