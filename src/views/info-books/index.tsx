import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import Footer from '@/ui/views/info/footer';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    books: Array<{
      author: string;
      title: string;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ 01-X01 ]</HeaderEyebrow>
        <HeaderPrefix>Info/</HeaderPrefix>Books
        <HeaderSubtitle>What I've read</HeaderSubtitle>
      </Header>
      <Introduction>
        {data.books.length} items
      </Introduction>
      <ul className={styles.items}>
        {data.books.map((book, index: number) => (
          <li className={styles.item} key={book.title}>
            <span className={styles.eyebrow}>[ 00-{padIndex(index + 1)} ]</span>
            <Link href={`https://www.amazon.com/s?k=${book.title.replaceAll(' ', '+')}+${book.author.replaceAll(' ', '+')}&i=stripbooks`} target="_blank">
              {book.title}
              <span className={styles.lid}>{book.author}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Footer current="/info/books" />
    </>
  );
}
