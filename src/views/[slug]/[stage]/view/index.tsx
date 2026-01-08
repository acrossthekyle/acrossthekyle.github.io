import { Fragment } from 'react';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderBack, HeaderHeading } from '@/ui/header';
import { Image, ImageFigure } from '@/ui/image';
import { Eyebrow, Paragraph, Subtitle } from '@/ui/typography';

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
            {data.location[0]} &mdash; {data.location[1]}
          </Eyebrow>
          {data.title.map((words, index: number) => (
            <span className={styles.line} key={index}>{words}</span>
          ))}
          <Subtitle>
            {data.date}
          </Subtitle>
        </HeaderHeading>
        {data.hasStats && (
          <Stats stats={data.stats} />
        )}
      </LayoutHeader>
      <LayoutMain>
        <article aria-labelledby="main-heading" className={styles.article}>
          {data.description.map((paragraph, index: number) => (
            <Fragment key={paragraph}>
              <Paragraph>
                {paragraph}
              </Paragraph>
              {index === 0 && (
                <ImageFigure className="my-6">
                  <Image
                    alt=""
                    color
                    height={1080}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={data.image}
                    width={1920}
                  />
                </ImageFigure>
              )}
            </Fragment>
          ))}
        </article>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
