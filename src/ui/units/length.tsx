'use client';

import { useUnits } from '@/hooks/useUnits';

type Props = {
  isSmall?: boolean;
  value: {
    imperial: string | number;
    metric: string;
  };
};

export default function Length({ isSmall, value }: Props) {
  const { labels, units } = useUnits();

  return (
    <>
      {value[units as keyof typeof value]} {isSmall ? labels.length.micro : labels.length.macro}
    </>
  );
}
