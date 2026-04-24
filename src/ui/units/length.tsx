'use client';

import { useUnits } from '@/hooks/useUnits';
import type { Stat } from '@/types';

type Props = {
  isSmall?: boolean;
  value: Stat;
};

export default function Length({ isSmall, value }: Props) {
  const { labels, units } = useUnits();

  return (
    <>
      {value[units as keyof typeof value]} {isSmall ? labels.length.micro : labels.length.macro}
    </>
  );
}
