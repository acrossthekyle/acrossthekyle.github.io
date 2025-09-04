import type { Stage } from '@/types';

import styles from './stylesheet';

type Props = {
  stage: Stage;
};

export default function Caption({ stage }: Props) {
  return (
    <figcaption className={styles.caption}>
      <span className={styles.index}>
        {!stage.termini.isSame ? `${stage.termini.start.join(' ')} To` : stage.location}
      </span>
      {stage.termini.end.map((word) => (
        <span className="block" key={word}>{word}</span>
      ))}
    </figcaption>
  );
}
