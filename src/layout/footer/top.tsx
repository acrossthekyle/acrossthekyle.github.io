'use client';

import tw from '@/styles';

export default function Top() {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={styles.container}
      onClick={handleOnClick}
      type="button"
    >
      Back to top
    </button>
  );
};

const styles = tw({
  container: `
    py-4
    flex items-center justify-center
    w-full
    text-tiny text-center
    uppercase
    rounded-xs
    border-t border-current/12.5

    sm:w-1/2
    lg:hidden
  `,
});
