import { Article } from '@/layout';

import Content from './content';
import Figure from './figure';
import Header from './header';
import styles from './stylesheet';

export default function View() {
  return (
    <Article.Container>
      <Article.Header>
        <Header />
      </Article.Header>
      <Article.Content className={styles.content}>
        <Content />
      </Article.Content>
      <Article.Figure>
        <Figure />
      </Article.Figure>
    </Article.Container>
  );
}
