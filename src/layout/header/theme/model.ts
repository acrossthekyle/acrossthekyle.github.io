'use client';

import { useTheme } from '@/hooks/useTheme';

export function useModel() {
  const { onToggleTheme, theme } = useTheme();

  const handleOnSwitchTheme = () => {
    onToggleTheme();
  };

  return {
    handleOnSwitchTheme,
    theme,
  };
};
