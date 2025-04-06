'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Return = {
  handleOnClose: () => void;
  handleOnLinkClick: () => void;
  handleOnOpen: () => void;
  isActive: boolean;
};

export const useViewModel = (): Return => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        setIsActive(false);
      }

      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleOnClose = useCallback(() => {
    setIsActive(false);

    document.getElementById('menuOpen').focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnOpen = useCallback(() => {
    setIsActive(true);

    setTimeout(() => {
      document.getElementById('menuClose').focus();
    }, 750);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const handleOnLinkClick = useCallback(() => {
    setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return {
    handleOnClose,
    handleOnLinkClick,
    handleOnOpen,
    isActive,
  };
};

export default function Node() {
  return null;
}
