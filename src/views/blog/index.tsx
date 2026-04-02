import Markdown from 'react-markdown';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    words: Array<{
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
    <>
      <Header>
        <HeaderEyebrow>[ 03 ]</HeaderEyebrow>
        <HeaderPrefix>/</HeaderPrefix>Blog
        <HeaderSubtitle>Quick thoughts</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>Occasional</Highlight>ly sharing <Highlight>ideas and opinions</Highlight> about various topics in short 1 minute reads.
      </Introduction>
      {data.words.map((item) => (
        <article className={styles.article} key={item.index}>
          <h2 className={styles.heading}>
            <span className={styles.index}>[ 00-{padIndex(item.index + 1)} ]</span>
            {item.date}
          </h2>
          <section className={styles.section}>
            <h3 className={styles.title}>
              {item.title}
              <span className={styles.lid}>{item.readingTime} min read</span>
            </h3>
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
          </section>
        </article>
      ))}
    </>
  );
}
