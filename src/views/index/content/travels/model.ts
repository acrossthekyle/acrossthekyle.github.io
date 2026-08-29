'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function useModel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filterBy, setFilterBy] = useState<string>(() => {
    return searchParams.get('filter') || 'all';
  });

  const handleOnFilter = (value: string) => {
    setFilterBy(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', value);
    }

    const query = params.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    router.push(path, {
      scroll: false,
    });
  };

  return {
    filterBy,
    handleOnFilter,
  };
}
