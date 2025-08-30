'use client';

import { useEffect, useRef } from 'react';

type Model = {
  handleArticleScroll: () => void;
  ref: React.RefObject<HTMLElement | null>;
};

export function useModel(onScrollEnd?: () => void): Model {
  const ref = useRef(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
        onScrollEnd?.();
      }
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [onScrollEnd]);

  const handleArticleScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;

      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        onScrollEnd?.();
      }
    }
  };

  return {
    handleArticleScroll,
    ref,
  };
}
