'use client';

import { useEffect } from 'react';

import { useTheme } from '@/hooks/useTheme';

export default function Shortcuts() {
  const { onToggleTheme } = useTheme();

  useEffect(() => {
    const handleOnShortcut = (event: KeyboardEvent) => {
      if (['.'].includes(event.key) && (event.metaKey || event.ctrlKey)) {
        if (event.key === '.') {
          onToggleTheme();

          return;
        }
      }
    };

    document.addEventListener('keydown', handleOnShortcut);

    return () => document.removeEventListener('keydown', handleOnShortcut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
