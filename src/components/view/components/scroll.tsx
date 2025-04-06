import Images from '@/images';
import Styles from '@/styles';

import { useViewModel } from './scroll.viewModel';

const scss = Styles.Components.View.Components.Scroll;

type Props = {
  className?: string;
};

function Scroll({ className = '' }: Props) {
  const { handleOnScrollTop } = useViewModel();

  return (
    <button
      aria-label="scroll to top"
      className={scss.scrolltop}
      data-active="false"
      id="scroll-top"
      onClick={handleOnScrollTop}
      title="Scroll to top"
      type="button"
    >
      <Images.Icons.Arrow up />
    </button>
  );
}

export default Scroll;
