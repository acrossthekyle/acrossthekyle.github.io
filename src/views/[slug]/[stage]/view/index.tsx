import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderBack, HeaderHeading, HeaderSection } from '@/ui/header';
import { Image, ImageFigure } from '@/ui/image';
import { Eyebrow, Paragraph } from '@/ui/typography';

import Gpx from './gpx';
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
    <>
      <LayoutHeader>
        <HeaderBack fallback={`/${data.total === 1 ? '/' : data.slug}`} />
        <HeaderHeading>
          <Eyebrow>
            {data.travel}
          </Eyebrow>
          {data.title.map((words, index: number) => (
            <span className={styles.line} key={index}>{words}</span>
          ))}
        </HeaderHeading>
        {data.hasStats && (
          <HeaderSection>
            <Stats stats={data.stats} />
          </HeaderSection>
        )}
      </LayoutHeader>
      <LayoutMain>
        <article aria-labelledby="main-heading" className={styles.article}>
          <ImageFigure>
            <Image
              alt=""
              color
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={data.image}
              width={1920}
            />
          </ImageFigure>
          <section aria-label="description" className={styles.section}>
            <Paragraph>
              <span className={styles.meta}>
                {data.date}
              </span>
            </Paragraph>
            {data.description.map((paragraph) => (
              <Paragraph key={paragraph}>
                {paragraph}
              </Paragraph>
            ))}
          </section>
          {data.hasGpx && (
            <Gpx gpx={data.gpx} termini={data.termini} />
          )}
        </article>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
