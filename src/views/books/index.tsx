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
      genre: string;
      pages: number;
      title: string;
      year: number;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <Content>
      <div className={styles.header}>
        <Header>
          <HeaderEyebrow>./</HeaderEyebrow>
          <HeaderText>
            Books
          </HeaderText>
          <HeaderSubtitle>
            What I've read
          </HeaderSubtitle>
        </Header>
        <span className="text-right">
          {data.books.length} books<br />
          [Non|Sci] Fiction<br />
          * Non-affiliated links
        </span>
      </div>
      <ul className={styles.items}>
        {data.books.map((book, index: number) => (
          <li className={styles.item} key={book.title}>
            <span className={styles.index}>[ 00-{padIndex(index + 1)} ]</span>
            <div>
              <Link
                className={styles.link}
                href={`https://www.amazon.com/s?k=${book.title.replaceAll(' ', '+')}+${book.author.replaceAll(' ', '+')}&i=stripbooks`}
                target="_blank"
              >
                <ExternalIcon>{book.title}</ExternalIcon>
              </Link>
              <span className={styles.lid}>{book.author}</span>
              <span className={styles.lid}>{book.genre}</span>
              <span className={styles.lid}>{book.pages} pages</span>
              <span className={styles.lid}>{book.year}</span>
            </div>
          </li>
        ))}
      </ul>
    </Content>
  );
}
