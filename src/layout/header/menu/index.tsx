import FocusLock, { AutoFocusInside } from 'react-focus-lock';

import tw from '@/styles';

import Colophon from './colophon';
import Copyright from './copyright';
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
      <section aria-label="menu" className={styles.container(isActive)}>
        <Header />
        <Links isActive={isActive} onClick={onToggle} />
        <Colophon />
        <Copyright />
      </section>
    </FocusLock>
  );
};

const styles = tw({
  container: (isActive: boolean) => tw(`
    absolute right-0 top-0 bottom-0 z-50
    flex flex-col justify-between gap-8
    w-full h-dvh
    bg-(--background)

    sm:border-r
    sm:border-current/12.5

    landscape-constrained:overflow-y-auto

    ${isActive
      ? `translate-x-0`
      : `-translate-x-full invisible transition-[visibility]`
    }
  `),
});
