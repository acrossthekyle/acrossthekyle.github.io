import { Article } from '@/layout';
import type { Collection } from '@/types';

import Content from './content';
import Figure from './figure';
import Header from './header';
import styles from './stylesheet';

type Props = {
  data: {
    recent: Collection;
  };
};

export default function View({ data }: Props) {
  return (
    <Article.Container>
      <Article.Header>
        <Header />
      </Article.Header>
      <Article.Content className={styles.content}>
        <Content recent={data.recent} />
      </Article.Content>
      <Article.Figure>
        <Figure />
      </Article.Figure>
    </Article.Container>
  );
}
