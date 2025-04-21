import Link from 'next/link';

import Images from '@/images';
import { useCartHasItems } from '@/store/cart';
import Styles from '@/styles';

const scss = Styles.Components.View.Components.Cart;

function Cart() {
  const hasItems = useCartHasItems();

  return (
    <Link className={scss.link} href="/store/checkout/cart">
      <Images.Icons.Cart />
      {hasItems && <span className={scss.count} />}
    </Link>
  );
}

export default Cart;
