import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';
import type { Posts } from '@/types';

import Categories from '../categories';
import Image from '../image';

const scss = Styles.Components.Post.Title;

type Props = {
  author: string;
  breadcrumbs?: Posts.Breadcrumb[];
  categories: string[];
  date: string;
  title: string;
};

function Title({ author, breadcrumbs, categories, date, title }: Props) {
  return (
    <div className={scss.container}>
      <Categories className={scss.categories} items={categories} />
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
