'use client';

import { useTheme } from '@/hooks/useTheme';
import { ButtonBackdrop } from '@/ui/button';

export default function Theme() {
  const { onToggleTheme, theme } = useTheme();

  return (
    <ButtonBackdrop onClick={onToggleTheme}>
      Theme
      <small>Current: {theme}</small>
    </ButtonBackdrop>
  );
}
