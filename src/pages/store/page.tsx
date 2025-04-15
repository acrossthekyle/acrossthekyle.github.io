import Components from '@/components';
import Styles from '@/styles';
import type { Store } from '@/types';

import Card from './page.component.card';
import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Store.Page;

function Page() {
  const { isLoading, isReady, items } = useViewModel();

  return (
    <Components.View title="Store">
      <h1 className={scss.heading}>Store</h1>
      {isLoading && <Components.Loading />}
      {isReady && (
        <div className={scss.items}>
          {items.map((item: Store.Page.Item) => (
            <div className={scss.item} key={item.title}>
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </Components.View>
  );
}

export default Page;
