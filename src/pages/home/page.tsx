import Link from 'next/link';

import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';
import type { Posts } from '@/types';

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
            height={432}
            sizes="25vw"
            src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
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
        <Components.Masonry
          items={items}
          renderItem={({
            date,
            image,
            snippet,
            tags,
            title,
            uri,
          }: Pick<
            Posts.Post,
            'date' | 'image' | 'snippet' | 'tags' | 'title' | 'uri'
          >) => (
            <Components.Figure
              date={date}
              image={image}
              snippet={snippet}
              tags={tags}
              title={title}
              uri={uri}
            />
          )}
        />
      )}
    </Components.View>
  );
}

export default Page;
