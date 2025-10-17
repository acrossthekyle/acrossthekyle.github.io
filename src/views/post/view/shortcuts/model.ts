'use client';

export const useModel = () => {
  const handleOnScrollToOverview = () => {
    const element = document.getElementById('overview');

    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  const handleOnScrollToTop = () => {
    const element = document.getElementById('anchor');

    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return {
    handleOnScrollToOverview,
    handleOnScrollToTop,
  };
};
