import { useEffect, useState } from 'react';

import { getKeyboardSymbol } from '@/utils';

import styles from './stylesheet';

type Props = {
  letters?: string;
  symbol?: string;
};

export default function Keyboard({ letters, symbol }: Props) {
  const [result, setResult] = useState<{ isLetters: boolean; value: string | null; } | undefined>();

  useEffect(() => {
    if (symbol) {
      // necessary for next.js applications
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResult(getKeyboardSymbol(symbol));
    }
  }, [symbol]);

  if (symbol && result !== undefined) {
    if (result.value === null) {
      return null;
    }

    return (
      <kbd className={styles.container(!result.isLetters)}>{result.value}</kbd>
    );
  }

  return (
    <kbd className={styles.container(false)}>{letters}</kbd>
  );
}
