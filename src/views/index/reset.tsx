'use client';

import { useEffect } from 'react';

import { useView } from '@/hooks/useView';

export default function Reset() {
  const { onView } = useView();

  useEffect(() => {
    onView('grid');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
