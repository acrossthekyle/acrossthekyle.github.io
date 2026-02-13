import { useEffect, useState } from 'react';

import styles from './stylesheet';
import { getKeyboardSymbol } from './utils';

type Props = {
  value: string;
};

export default function Symbol({ value }: Props) {
  const [result, setResult] = useState<{ isLetters: boolean; value: string | null; } | undefined>();

  useEffect(() => {
    if (value) {
      // necessary for next.js applications
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResult(getKeyboardSymbol(value));
    }
  }, [value]);

  if (result !== undefined) {
    if (result.value !== null) {
      return <span className={styles.container}>{result.value}</span>;
    }
  }

  return null;
}
