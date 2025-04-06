'use client';

import { useEffect } from 'react';

import Utils from '@/utils';

type Return = {
  handleOnScrollTop: () => void;
};

export const useViewModel = (): Return => {
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    const content = document.getElementById('view-anchor');

    if (content) {
      content.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);

      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const content = document.getElementById('view-anchor');
    const button = document.getElementById('scroll-top');

    if (button && content) {
      if (
        document.getElementById('view-anchor').scrollTop > 200 ||
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        button.setAttribute('data-active', 'true');
      } else {
        button.setAttribute('data-active', 'false');
      }
    }
  };

  const handleOnScrollTop = () => {
    Utils.scrollToTop();

    document.getElementById('logo').focus();
  };

  return {
    handleOnScrollTop,
  };
};

export default function Node() {
  return null;
}
