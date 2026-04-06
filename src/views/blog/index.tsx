import Markdown from 'react-markdown';

import { Main } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    blog: Array<{
      content: string;
      date: string;
      index: number;
      readingTime: string;
      title: string;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <Main>
      <Header>
        <HeaderEyebrow>[ 03 ]</HeaderEyebrow>
        <HeaderText>MiniBlog</HeaderText>
        <HeaderSubtitle>Quick thoughts</HeaderSubtitle>
      </Header>
      <p className={styles.description}>
        <span className={styles.highlight}>Occasional</span>ly sharing <span className={styles.highlight}>ideas and opinions</span> in short 1 minute reads.
      </p>
      <ul className={styles.items}>
        {data.blog.map((item) => (
          <li className={styles.item} key={item.index}>
            <article>
              <h2 className={styles.heading}>
                <span className={styles.eyebrow}>
                  [ {padIndex(item.index + 1)} &ndash; {item.date} ]
                </span>
                {item.title}
                <span className={styles.lid}>{item.readingTime} min read</span>
              </h2>
              <Markdown
                components={{
                  p: ({ children }) => (
                    <p style={{ marginBottom: '1em' }}>
                      {children}
                    </p>
                  ),
                }}
              >
                {item.content}
              </Markdown>
            </article>
          </li>
        ))}
      </ul>
    </Main>
  );
}
