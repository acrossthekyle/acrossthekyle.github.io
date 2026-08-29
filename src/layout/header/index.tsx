'use client';

import tw from '@/styles';

import Anchor from './anchor';
import Backdrop from './backdrop';
import Menu from './menu';
import { useModel } from './model';
import Version from './version';

export default function Header() {
  const { handleOnClick, handleOnToggle, isMenuActive } = useModel();

  return (
    <>
      <header className={styles.container}>
        <Anchor />
        <Version />
        <Menu isActive={isMenuActive} onToggle={handleOnToggle} />
      </header>
      <Backdrop isActive={isMenuActive} onClick={handleOnClick} />
    </>
  );
};

const styles = tw({
  container: `
    absolute top-0 left-0
    w-full
    flex items-center
    p-4

    sm:w-1/2
    lg:w-1/3
  `,
});
