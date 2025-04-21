import { store } from '@/cache/store';
import Components from '@/components';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Page;

function Page() {
  return (
    <Components.View title="Store">
      <h1 className={scss.heading}>Store</h1>
      <div className={scss.items}>
        {store.map((item: Store.Item) => (
          <div className={scss.item} key={item.title}>
            <Components.Store.Card
              image={item.image}
              price={item.styles[0].price}
              title={item.title}
              uri={item.uri}
            />
          </div>
        ))}
      </div>
    </Components.View>
  );
}

export default Page;
