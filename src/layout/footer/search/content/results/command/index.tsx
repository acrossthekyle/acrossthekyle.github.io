'use client';

import { useTheme } from '@/hooks/useTheme';
import { Kbd } from '@/ui/keyboard';

import styles from './stylesheet';

type Props = {
  command: string;
  subtitle: string;
  text: string;
};

export default function Command({ command, subtitle, text }: Props) {
  const { onToggleTheme, theme } = useTheme();

  const handleOnCommand = () => {
    if (command === '.') {
      onToggleTheme();

      return;
    }
  };

  const interpolate = (value: string) => {
    return value.replace('{{theme}}', theme);
  };

  return (
    <button
      className={styles.container}
      onClick={handleOnCommand}
      type="button"
    >
      <span>
        {text}
        <small className={styles.subtitle}>{interpolate(subtitle)}</small>
      </span>
      <kbd className={styles.group}>
        <Kbd symbol="cmdCtrl" />
        <Kbd letters={command} />
      </kbd>
    </button>
  );
}
