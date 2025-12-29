import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import {
  Image,
  ImageFigure,
} from '@/ui/image';
import type { Post } from '@/types';

import Return from './return';
import styles from './stylesheet';

type Props = {
  data: Post | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return null;
  }

  return (
    <section aria-labelledby="heading">
      <Return />
      <header className={styles.overview}>
        <h2 className={styles.heading} id="heading">
          {data.title.join(' ')}
        </h2>
        <h3 className={styles.meta}>
          {data.type} from {data.date} located in {data.location}
        </h3>
        {data.description.length > 0 && (
          <section aria-label="overview">
            {data.description.map((paragraph) => (
              <p className={styles.description} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        )}
      </header>
      {data.stages.map((stage, index) => (
        <article className={styles.article} key={stage.index}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.prefix}>{data.label} {index + 1} of {data.stages.length}:&nbsp;</span>
              <span>{stage.termini.end.words.join(' ')}</span>
            </h2>
            <h3 className={styles.date}>
              {stage.date} • {stage.readingTime} min read
            </h3>
          </header>
          <ImageFigure className={styles.figure}>
            <Link href={`/${data.slug}/${stage.index}`} tabIndex={-1}>
              <Image
                alt=""
                height={1080}
                index={index}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={stage.image}
                width={1920}
              />
            </Link>
          </ImageFigure>
          <section aria-label="preview" className={styles.preview}>
            <p className={styles.paragraph}>
              {stage.description[0]}
            </p>
            <Link
              aria-label={`learn more about ${data.label} ${index + 1} of ${data.stages.length}: ${stage.termini.end.words.join(' ')}`}
              className={styles.view}
              href={`/${data.slug}/${stage.index}`}
            >
              Learn More <MoveRight className={styles.icon} />
            </Link>
          </section>
        </article>
      ))}
    </section>
  );
}
