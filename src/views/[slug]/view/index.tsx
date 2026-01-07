import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderBack, HeaderHeading, HeaderSection } from '@/ui/header';
import {
  Image,
  ImageCaption,
  ImageCaptionContent,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageFigure,
} from '@/ui/image';
import { Eyebrow, Paragraph } from '@/ui/typography';

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
      <LayoutHeader>
        <HeaderBack fallback="/" />
        <HeaderHeading>
          <Eyebrow>
            {data.location}
          </Eyebrow>
          {data.title.map((words, index: number) => (
            <span className={styles.line} key={index}>{words}</span>
          ))}
        </HeaderHeading>
        <HeaderSection>
          {data.description.map((paragraph) => (
            <Paragraph key={paragraph}>
              {paragraph}
            </Paragraph>
          ))}
        </HeaderSection>
      </LayoutHeader>
      <LayoutMain>
        {data.stages.length > 0 && (
          <>
            {data.stages.map((stage, index) => (
              <article
                aria-labelledby={`stage-${stage.index}`}
                className={styles.container}
                key={stage.index}
              >
                <Link href={`/${data.slug}/${stage.index}`}>
                  <ImageFigure scale>
                    <Image
                      alt=""
                      height={1080}
                      index={index}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={stage.image}
                      width={1920}
                    />
                    <ImageCaption>
                      <ImageCaptionCount>
                        {stage.index}
                      </ImageCaptionCount>
                      <ImageCaptionContent id={`stage-${stage.index}`}>
                        <ImageCaptionEyebrow>
                          {stage.location}
                        </ImageCaptionEyebrow>
                        {stage.termini.end.words.map((words) => (
                          <span className="block" key={words}>{words}</span>
                        ))}
                      </ImageCaptionContent>
                    </ImageCaption>
                  </ImageFigure>
                </Link>
                <section aria-label="preview" className={styles.preview}>
                  <span className={styles.date}>
                    {stage.date}
                  </span>
                  <Paragraph>
                    {stage.description[0]}..
                  </Paragraph>
                </section>
              </article>
            ))}
          </>
        )}
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
