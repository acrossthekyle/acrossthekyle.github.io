import Link from 'next/link';
import { useState } from 'react';

import { posts } from '@/cache/posts';
import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';
import { transformPostsForMasonry } from '@/utils/components';

const scss = Styles.Pages.Home.Page;

function Page() {
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
      <Components.Masonry items={transformPostsForMasonry(posts)} />
    </Components.View>
  );
}

export default Page;
