import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';

import { useViewModel } from './cart.viewModel';

const scss = Styles.Components.View.Components.Cart;

function Cart() {
  const { count } = useViewModel();

  return (
    <Link className={scss.link} href="/store/checkout/cart">
      <Images.Icons.Cart />
      {count > 0 && <span className={scss.count} />}
    </Link>
  );
}

export default Cart;
