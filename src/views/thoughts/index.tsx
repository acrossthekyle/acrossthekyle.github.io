import Markdown from 'react-markdown';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Array<{
    content: string;
    date: string;
    index: number;
    readingTime: string;
    title: string;
  }>;
};

export default function View({ data }: Props) {
  return (
    <Content>
      <div className={styles.definition} role="presentation">
        <span>Ideas</span>
        <span>and</span>
        <span>opinions</span>
      </div>
      <Header>
        <HeaderEyebrow>[ 03 ]</HeaderEyebrow>
        <HeaderText>Thoughts</HeaderText>
        <HeaderSubtitle>Quick reads</HeaderSubtitle>
      </Header>
      <article className={styles.intro}>
        <h2 className={styles.header}>
          Latest
          <span className={styles.subheader}>
            {data[0].title} &mdash; {data[0].date}
          </span>
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
          {data[0].content}
        </Markdown>
      </article>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Previous
          <span className={styles.subheading}>
            Older thoughts
          </span>
        </h2>
        <ul className={styles.items}>
          {data.slice(1).map((item, index: number) => (
            <li className={styles.item} key={item.date}>
              <span aria-hidden="true" className={styles.index}>
                [ 00-{padIndex(index + 1)} ]
              </span>
              <article className={styles.article}>
                <h2 className={styles.title}>
                  {item.title}
                  <span className={styles.subtitle}>
                    {item.date} &mdash; {item.readingTime} min read
                  </span>
                </h2>
                <div className={styles.content}>
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
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Content>
  );
}
