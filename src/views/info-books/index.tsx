import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
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
    <Content>
      <Header>
        <HeaderEyebrow>[ 01-X01 ]</HeaderEyebrow>
        <HeaderPrefix>
          <Link href="/info">Info</Link>
        </HeaderPrefix>
        <HeaderText>Books</HeaderText>
        <HeaderSubtitle>What I've read</HeaderSubtitle>
      </Header>
      <aside className={styles.aside}>
        {data.books.length} items
      </aside>
      <ul className={styles.items}>
        {data.books.map((book, index: number) => (
          <li className={styles.item} key={book.title}>
            <span className={styles.eyebrow}>[ 00-{padIndex(index + 1)} ]</span>
            <Link
              href={`https://www.amazon.com/s?k=${book.title.replaceAll(' ', '+')}+${book.author.replaceAll(' ', '+')}&i=stripbooks`}
              target="_blank"
            >
              <ExternalIcon>{book.title}</ExternalIcon>
              <span className={styles.lid}>{book.author}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Footer current="/info/books" />
    </Content>
  );
}
