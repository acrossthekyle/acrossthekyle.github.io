'use client';

export function useModel() {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return {
    handleOnClick,
  };
};
