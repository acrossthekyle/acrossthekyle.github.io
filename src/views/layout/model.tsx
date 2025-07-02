import { useModal } from '@/hooks/useModal';

import Menu from './menu';

export function useModel() {
  const { modal } = useModal();

  const handleOnMenuOpen = () => {
    modal({
      content: <Menu />,
      size: 'md',
    });
  };

  return {
    handleOnMenuOpen,
  };
}
