'use client';

import { useUnits } from '@/hooks/useUnits';

type Props = {
  isSmall?: boolean;
  weight: {
    imperial: string;
    metric: string;
  };
};

export default function Weight({ isSmall, weight }: Props) {
  const { current, labels } = useUnits();

  return (
    <>
      {weight[current as keyof typeof weight]} {isSmall ? labels.weight.micro : labels.weight.macro}
    </>
  );
}
