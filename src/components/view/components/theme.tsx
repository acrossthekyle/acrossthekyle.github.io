import { useViewModel } from './theme.viewModel';

function Theme() {
  const { handleOnClick, theme } = useViewModel();

  return (
    <button
      aria-label={`switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={handleOnClick}
      type="button"
    >
      Switch to {theme === 'dark' ? 'light' : 'dark'} theme
    </button>
  );
}

export default Theme;
