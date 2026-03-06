'use client';

import { useUnits } from '@/hooks/useUnits';
import { ButtonBackdrop } from '@/ui/button';

export default function Units() {
  const { onToggleUnits, units } = useUnits();

  return (
    <ButtonBackdrop onClick={onToggleUnits}>
      Units
      <small>Current: {units}</small>
    </ButtonBackdrop>
  );
}
