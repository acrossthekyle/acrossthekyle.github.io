import Link from 'next/link';

import Components from '@/components';
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
              height={24}
              quality={20}
              sizes="10vw"
              src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
              width={24}
            />
          </Link>
          <div className={scss.items}>
            <Link className={`${scss.link} ${scss.item}`.trim()} href="/me">
              Kyle Gilbert
            </Link>
            {date && <span className={scss.item}>{date}</span>}
            {pack && (
              <Link className={`${scss.link} ${scss.pack}`} href={pack}>
                Pack
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Title;
