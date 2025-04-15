import Link from 'next/link';

import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';
import type { Posts } from '@/types';

const scss = Styles.Pages.Posts.LayoutComponentTitle;

type Props = Pick<
  Posts.Post,
  'breadcrumbs' | 'date' | 'pack' | 'tags' | 'title' | 'uri'
>;

function Title({ breadcrumbs, date, pack, tags, title, uri }: Props) {
  return (
    <div className={scss.container}>
      {tags !== undefined && (
        <Components.Tags className={scss.tags} items={tags} />
      )}
      {breadcrumbs?.length > 0 && (
        <Components.Breadcrumbs
          className={scss.breadcrumbs}
          items={breadcrumbs}
        />
      )}
      <h1 className={scss.title}>{title}</h1>
      {(date || pack) && (
        <div className={scss.context}>
          <Link aria-label="About Kyle" className={scss.author} href="/me">
            <Components.Image
              alt=""
              aria-hidden="true"
              canTransform={false}
              height={24}
              quality={20}
              sizes="10vw"
              src={Constants.ME_URL}
              width={24}
            />
          </Link>
          <div className={scss.items}>
            <h4 className={`${scss.name} ${scss.item}`}>
              Kyle Gilbert
            </h4>
            <span className={`${scss.item} ${scss.date}`}>{date}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Title;
