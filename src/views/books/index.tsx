import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
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
      <div className={styles.definition} role="presentation">
        <span>Non-fiction</span>
        <span>Fiction</span>
        <span>Science Fiction</span>
      </div>
      <Header>
        <HeaderEyebrow>[ 04 ]</HeaderEyebrow>
        <HeaderText>Books</HeaderText>
        <HeaderSubtitle>{data.books.length} reads and counting</HeaderSubtitle>
      </Header>
      <aside className={styles.aside}>
        *All amazon links are non-affiliated
      </aside>
      <ul className={styles.items}>
        {data.books.map((book, index: number) => (
          <li className={styles.item} key={book.title}>
            <span className={styles.index}>[ 00-{padIndex(index + 1)} ]</span>
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
    </Content>
  );
}
