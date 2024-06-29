'use client';

import { useEffect } from 'react';

import styles from '@/styles/ui/scroll.module.scss';

import ArrowIcon from './icons/arrow';

type Props = {
  className?: string;
};

function Scroll({ className = '' }: Props) {
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
    const content = document.getElementById('view-anchor');

    if (content) {
      content.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      aria-label="scroll to top"
      className={styles.scrolltop}
      data-active="false"
      id="scroll-top"
      onClick={handleOnScrollTop}
      title="Scroll to top"
      type="button"
    >
      <ArrowIcon up />
    </button>
  );
}

export default Scroll;
