import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import {
  Image,
  ImageCaption,
  ImageCaptionContent,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageCaptionMeta,
  ImageFigure,
} from '@/ui/image';

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
    <>
      <Return />
      <article className={styles.container}>
        <ImageFigure>
          <Image
            alt=""
            color
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={data.image}
            width={1920}
          />
          <ImageCaption>
            <ImageCaptionCount>
              {data.index}
            </ImageCaptionCount>
            <ImageCaptionContent>
              <ImageCaptionEyebrow>
                {data.location}
              </ImageCaptionEyebrow>
              {data.title.map((words) => (
                <span className={styles.line} key={words}>{words}</span>
              ))}
            </ImageCaptionContent>
            <ImageCaptionMeta>
              {data.type}
            </ImageCaptionMeta>
          </ImageCaption>
        </ImageFigure>
        {data.description.length > 0 && (
          <section aria-label="overview">
            {data.description.map((paragraph) => (
              <p className={styles.description} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        )}
        {data.stages.length > 0 && (
          <nav aria-label="supplementary navigation" className={styles.nav}>
            <ul className={styles.list}>
              {data.stages.map((stage, index) => (
                <li className={styles.item} key={index}>
                  <Link className={styles.link} href={`/${data.slug}/${stage.index}`}>
                    <span className={styles.eyelid}>
                      {data.label} #{stage.index}
                    </span>
                    <h3 className={styles.heading}>
                      {stage.termini.end.words.map((words) => (
                        <span className={styles.line} key={words}>{words}</span>
                      ))}
                    </h3>
                    <span className={styles.eyelid}>
                      {stage.date}
                    </span>
                  </Link>
                  <p className={styles.preview}>
                    {stage.description[0]}
                  </p>
                  <Link className={styles.more} href={`/${data.slug}/${stage.index}`}>
                    View Details <ArrowRight className={styles.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </>
  );
}
