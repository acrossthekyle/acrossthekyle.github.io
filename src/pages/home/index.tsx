import Link from 'next/link';
import { useState } from 'react';

import { posts } from '@/cache/posts';
import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';
import { transformPostsOrStagesForMasonry } from '@/utils/components';

const scss = Styles.Pages.Home.Page;

function Page() {
  return (
    <Components.View>
      <div className={scss.header}>
        <Link className={scss.image} href="/me" title="Kyle Gilbert">
          <Components.Image
            alt=""
            aria-hidden="true"
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
      <Components.Masonry items={transformPostsOrStagesForMasonry(posts)} />
    </Components.View>
  );
}

export default Page;
