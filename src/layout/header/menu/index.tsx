import FocusLock, { AutoFocusInside } from 'react-focus-lock';

import tw from '@/styles';
import type { Collection } from '@/types';

import Header from './header';
import Search from './search';
import Trigger from './trigger';

type Props = {
  collections: Collection[];
  isActive: boolean;
  onToggle: () => void;
};

export default function Menu({ collections, isActive, onToggle }: Props) {
  return (
    <FocusLock disabled={!isActive}>
      <AutoFocusInside>
        <Trigger isActive={isActive} onClick={onToggle} />
      </AutoFocusInside>
      <div className={styles.container(isActive)}>
        <Header onClick={onToggle} />
        <Search
          collections={collections}
          isActive={isActive}
          onClick={onToggle}
        />
      </div>
    </FocusLock>
  );
};

const styles = tw({
  container: (isActive: boolean) => tw(`
    absolute left-0 top-0 bottom-0 z-50
    flex flex-col
    w-full min-h-svh
    overflow-y-auto
    bg-(--background)
    border-r border-current/12.5

    motion-safe:duration-300

    ${isActive ? 'translate-x-0' : `
      -translate-x-full invisible transition-[visibility]
    `}

    sm:w-[50svw]
    lg:w-[33.333333svw]
  `),
});
