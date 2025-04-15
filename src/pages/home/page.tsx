import Link from 'next/link';

import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';
import Utils from '@/utils';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Home.Page;

function Page() {
  const { isLoading, isReady, items } = useViewModel();

  return (
    <Components.View>
      <div className={scss.header}>
        <Link aria-hidden="true" className={scss.image} href="/me">
          <Components.Image
            alt=""
            canTransform={false}
            height={432}
            sizes="25vw"
            src={Constants.ME_URL}
            width={768}
          />
        </Link>
        <h1 className={scss.heading}>Kyle Gilbert</h1>
        <p className={scss.text}>{Constants.ABOUT_ME_BLURB}</p>
        <Components.Shortcuts
          childClassName={scss.link}
          parentClassName={scss.links}
          shouldLabel
        />
      </div>
      {isLoading && <Components.Loading />}
      {isReady && (
        <Components.Masonry items={Utils.masonry.transformPosts(items)} />
      )}
    </Components.View>
  );
}

export default Page;
