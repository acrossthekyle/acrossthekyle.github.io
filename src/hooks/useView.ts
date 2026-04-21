import { useContext } from 'react';

import { ViewContext } from '@/contexts/view';

export function useView() {
  const context = useContext(ViewContext);

  if (context === null) {
    throw new Error('view context not ready');
  }

  return context;
}
