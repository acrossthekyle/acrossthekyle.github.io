'use client';

import { useSearchParams } from 'next/navigation';

type Model = {
  active: string | null;
};

export function useModel(): Model {
  const searchParams = useSearchParams();

  return {
    active: searchParams.get('filter'),
  };
}
