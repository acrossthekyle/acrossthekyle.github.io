import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionText,
} from '@/ui/image';

import Gpx from './gpx';
import Return from './return';
import Stats from './stats';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return null;
  }

  return (
    <section aria-labelledby="heading">
      <Return label={data.travel} slug={data.slug} />
      <article className={styles.article}>
        <figure className={styles.figure}>
          <Image
            alt=""
            color
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={data.image}
            width={1920}
          />
          <ImageCaption className={styles.caption}>
            <ImageCaptionEyebrow>
              {data.date}
            </ImageCaptionEyebrow>
            <ImageCaptionText>
              {data.title.join(' ')}
            </ImageCaptionText>
          </ImageCaption>
        </figure>
        {data.hasStats && (
          <Stats stats={data.stats} />
        )}
        {data.description.length > 0 && (
          <section aria-label="description" className={styles.section}>
            {data.description.map((paragraph) => (
              <p className={styles.paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        )}
        {data.hasGpx && (
          <Gpx gpx={data.gpx} termini={data.termini} />
        )}
      </article>
    </section>
  );
}
