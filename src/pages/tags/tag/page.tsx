import Components from '@/components';
import Styles from '@/styles';
import type { Tags } from '@/types';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Tags.Tag.Page;

function Page() {
  const { isReady, items, tag, total } = useViewModel();

  if (!isReady) {
    return null;
  }

  return (
    <Components.View title={`Tags | ${tag}`}>
      <h1 className={scss.header}>{tag}</h1>
      <p className={scss.total}>{`${total} Item(s)`}</p>
      <Components.Masonry
        items={items}
        renderItem={(item: Tags.Tag.Item) => <Components.Figure {...item} />}
      />
    </Components.View>
  );
}

export default Page;
