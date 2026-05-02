'use client';

import { useUnits } from '@/hooks/useUnits';
import type { Stat } from '@/types';

type Props = {
  isSmall?: boolean;
  value: Stat;
};

export default function Length({ isSmall, value }: Props) {
  const { assumed, opposite } = useUnits();

  return (
    <>
      {value[assumed.units as keyof typeof value]} {isSmall ? assumed.labels.length.micro : assumed.labels.length.macro}
      <span className="inline-block ml-2 opacity-50">({value[opposite.units as keyof typeof value]} {isSmall ? opposite.labels.length.micro : opposite.labels.length.macro})</span>
    </>
  );
}
