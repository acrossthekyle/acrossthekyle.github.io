import { useContext } from 'react';

import { DialogContext } from '@/contexts/dialog';

export function useDialog() {
  const context = useContext(DialogContext);

  return context;
}
