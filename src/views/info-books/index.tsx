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
            <p>
              {book.title}
              <span className={styles.lid}>{book.author}</span>
            </p>
          </li>
        ))}
      </ul>
      <Footer current="/info/books" />
    </>
  );
}
