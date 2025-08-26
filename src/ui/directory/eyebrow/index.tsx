import { Slash } from 'lucide-react';
import { Fragment } from 'react';

import styles from './stylesheet';

type Props = {
  text: string[];
};

export default function DirectoryEyebrow({ text }: Props) {
  return (
    <span className={styles.eyebrow}>
      {text.map((meta, index: number) => (
        <Fragment key={meta}>
          <span className={styles.text}>
            {meta}
          </span>
          {(index !== text.length - 1) && (
            <Slash className={styles.slash} />
          )}
        </Fragment>
      ))}
    </span>
  );
}
