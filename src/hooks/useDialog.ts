import { useContext } from 'react';

import { DialogContext } from '@/contexts/dialog';

export function useDialog() {
  const context = useContext(DialogContext);

  if (context === null) {
    throw new Error('dialog context not ready');
  }

  return context;
}
