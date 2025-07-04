import { useModal } from '@/hooks/useModal';

import Components from './components';

export function useModel() {
  const { modal } = useModal();

  const handleOnMenuOpen = () => {
    modal({
      content: <Components.Menu />,
      size: 'md',
    });
  };

  return {
    handleOnMenuOpen,
  };
}
