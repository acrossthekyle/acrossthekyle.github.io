'use client';

import { useCallback, useState } from 'react';

export function useCopy() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  }, []);

  return {
    handleCopy,
    isCopied,
  };
}
