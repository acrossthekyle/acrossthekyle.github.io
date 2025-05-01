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
  readingTime: number;
  snippet?: string;
  title: string;
};

function Title({
  author,
  breadcrumbs,
  categories,
  date,
  readingTime,
  snippet,
  title,
}: Props) {
  return (
    <header className={scss.container}>
      <Categories items={categories} />
      {breadcrumbs && (
        <ul>
          {breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.title}>
              <Link href={breadcrumb.uri}>{breadcrumb.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <h1>{title}</h1>
      {snippet && <p>{snippet}</p>}
      <section>
        <time className={`${scss.item} ${scss.date}`}>{date}</time>
        <span>{Math.ceil(readingTime)} Min Read</span>
      </section>
    </header>
  );
}

export default Title;
