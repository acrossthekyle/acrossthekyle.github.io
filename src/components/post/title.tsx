import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';
import type { Posts } from '@/types';

import Image from '../image';
import Tags from '../tags';

const scss = Styles.Components.Post.Title;

type Props = {
  author: string;
  breadcrumbs?: Posts.Breadcrumb[];
  date: string;
  tags: string[];
  title: string;
};

function Title({ author, breadcrumbs, date, tags, title }: Props) {
  return (
    <div className={scss.container}>
      <Tags className={scss.tags} items={tags} />
      {breadcrumbs && (
        <ul className={scss.breadcrumbs}>
          {breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.title}>
              <Link href={breadcrumb.uri}>{breadcrumb.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <h1 className={scss.title}>{title}</h1>
      <time className={`${scss.item} ${scss.date}`}>{date}</time>
    </div>
  );
}

export default Title;
