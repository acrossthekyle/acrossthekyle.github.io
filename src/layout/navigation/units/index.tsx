'use client';

import { useUnits } from '@/hooks/useUnits';
import { ButtonBackdrop } from '@/ui/button';
import { Small, Strong } from '@/ui/typography';

export default function Units() {
  const { onToggleUnits, units } = useUnits();

  return (
    <ButtonBackdrop onClick={onToggleUnits}>
      <Strong>Units</Strong>
      <Small>Current: {units}</Small>
    </ButtonBackdrop>
  );
}
