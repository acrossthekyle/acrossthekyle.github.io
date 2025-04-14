import Button from '../../button';

import { useViewModel } from './theme.viewModel';

function Theme() {
  const { handleOnClick, theme } = useViewModel();

  return (
    <Button
      mode="tertiary"
      onClick={handleOnClick}
      text={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    />
  );
}

export default Theme;
