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
            {data.location} &mdash; {data.travel}
          </Eyebrow>
          {data.title.map((words, index: number) => (
            <span className={styles.line} key={index}>{words}</span>
          ))}
        </HeaderHeading>
        {data.hasStats && (
          <Stats stats={data.stats} />
        )}
        {data.hasGpx && (
          <HeaderSection>
            <Gpx gpx={data.gpx} termini={data.termini} />
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
          <Paragraph className={styles.date}>
            {data.label} {data.index} &mdash; {data.date}
          </Paragraph>
          {data.description.map((paragraph) => (
            <Paragraph key={paragraph}>
              {paragraph}
            </Paragraph>
          ))}
        </article>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
