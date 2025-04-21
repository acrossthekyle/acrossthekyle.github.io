'use client';

import { useEffect } from 'react';

import Images from '@/images';
import Styles from '@/styles';
import { scrollToTop } from '@/utils/scroll';

const scss = Styles.Components.View.Components.Scroll;

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
    scrollToTop();

    document.getElementById('logo').focus();
  };

  return (
    <button
      aria-label="scroll to top"
      className={scss.scrolltop}
      data-active="false"
      id="scroll-top"
      onClick={handleOnScrollTop}
      title="Scroll to top"
      type="button"
    >
      <Images.Icons.Arrow up />
    </button>
  );
}

export default Scroll;
