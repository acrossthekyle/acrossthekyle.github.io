'use client';

import { useEffect } from 'react';

import { useTheme } from '@/hooks/useTheme';
// import { useUnits } from '@/hooks/useUnits';

export default function Shortcuts() {
  const { onToggleTheme } = useTheme();

  // const { onToggleUnits } = useUnits();

  useEffect(() => {
    const handleOnShortcut = (event: KeyboardEvent) => {
      if (['U', '.'].includes(event.key) && (event.metaKey || event.ctrlKey)) {
        // if (event.key === 'u') {
        //   onToggleUnits();

        //   return;
        // }

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
