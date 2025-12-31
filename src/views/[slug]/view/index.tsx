import {
  Image,
  ImageCaption,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageCaptionText,
  ImageFigure,
  ImageLink,
} from '@/ui/image';
import { padIndex } from '@/utils';

import Return from './return';
import styles from './stylesheet';
import type { Post } from './types';

type Props = {
  data: Post | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return null;
  }

  return (
    <section className={styles.container}>
      <Return />
      <header className={styles.overview}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>
            {data.location}
          </span>
          {data.title.map((words) => (
            <span className="block" key={words}>{words}</span>
          ))}
        </h2>
        <span className={styles.meta}>
          {data.date}
        </span>
        <figure className={styles.figure}>
          <Image
            alt=""
            color
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={data.image}
            width={1920}
          />
        </figure>
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
        <article
          aria-labelledby={`caption-${stage.index}`}
          className={styles.article}
          key={stage.index}
        >
          <ImageFigure>
            <Image
              alt=""
              height={1080}
              index={index}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={stage.image}
              width={1920}
            />
            <ImageCaption>
              <ImageLink href={`/${data.slug}/${stage.index}`}>
                <ImageCaptionCount
                  label={data.label}
                  superscript={`/${padIndex(data.stages.length)}`}
                >
                  {padIndex(index + 1)}
                </ImageCaptionCount>
                <ImageCaptionEyebrow>
                  {stage.date}
                </ImageCaptionEyebrow>
                <ImageCaptionText id={`caption-${stage.index}`}>
                  {stage.termini.end.words.map((words) => (
                    <span className="block" key={words}>{words}</span>
                  ))}
                </ImageCaptionText>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
          <p className={styles.preview}>
            {stage.description[0]}
          </p>
        </article>
      ))}
    </section>
  );
}
