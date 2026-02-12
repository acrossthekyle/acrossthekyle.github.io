'use client';

import { useTheme } from '@/hooks/useTheme';
import { useUnits } from '@/hooks/useUnits';
import { Kbd } from '@/ui/keyboard';

import styles from './stylesheet';

type Props = {
  command: string;
  subtitle: string;
  text: string;
};

export default function Command({ command, subtitle, text }: Props) {
  const { onToggleTheme, theme } = useTheme();

  const { onToggleUnits, units } = useUnits();

  const handleOnCommand = () => {
    if (command === 'U') {
      onToggleUnits();

      return;
    }

    if (command === '.') {
      onToggleTheme();

      return;
    }
  };

  const interpolate = (value: string) => {
    return value
      .replace('{{theme}}', theme)
      .replace('{{unit}}', units);
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
