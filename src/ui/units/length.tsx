'use client';

import { useOptions } from '@/hooks/useOptions';
import type { Stat } from '@/types';

type Props = {
  isSmall?: boolean;
  value: Stat;
};

export default function Length({ isSmall, value }: Props) {
  const { units } = useOptions();

  return (
    <>
      {value[units.type as keyof typeof value]} {isSmall ? units.labels.length.micro : units.labels.length.macro}
    </>
  );
}
