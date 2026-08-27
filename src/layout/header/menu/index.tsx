import FocusLock, { AutoFocusInside } from 'react-focus-lock';

import tw from '@/styles';

import Header from './header';
import Links from './links';
import Trigger from './trigger';

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export default function Menu({ isActive, onToggle }: Props) {
  return (
    <FocusLock disabled={!isActive}>
      <AutoFocusInside>
        <Trigger isActive={isActive} onClick={onToggle} />
      </AutoFocusInside>
      <div className={styles.container(isActive)}>
        <Header />
        <Links isActive={isActive} onClick={onToggle} />
      </div>
    </FocusLock>
  );
};

const styles = tw({
  container: (isActive: boolean) => tw(`
    absolute right-0 top-0 z-50
    flex flex-col
    w-full
    pointer-events-none

    ${isActive ? 'translate-x-0' : `
      -translate-x-full invisible transition-[visibility]
    `}
  `),
});
