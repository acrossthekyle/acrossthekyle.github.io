'use client';

import { useTheme } from '@/hooks/useTheme';
import { ButtonBackdrop } from '@/ui/button';
import { Small, Strong } from '@/ui/typography';

export default function Theme() {
  const { onToggleTheme, theme } = useTheme();

  return (
    <ButtonBackdrop onClick={onToggleTheme}>
      <Strong>Theme</Strong>
      <Small>Current: {theme}</Small>
    </ButtonBackdrop>
  );
}
