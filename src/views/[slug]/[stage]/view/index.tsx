import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import { LayoutAside, LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { Article, ArticleFooter } from '@/ui/article';
import { HeaderBack, HeaderHeading } from '@/ui/header';
import { Image, ImageFigure } from '@/ui/image';
import { Eyebrow, Line, Paragraph, Subtitle, Title } from '@/ui/typography';

import Navigation from './navigation';
import Stats from './stats';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <>
      <LayoutHeader>
        <HeaderBack fallback={`/${data.total === 1 ? '/' : data.slug}`} />
        <HeaderHeading>
          <Eyebrow>
            {data.location[0]} &mdash; {data.location[1]}
          </Eyebrow>
          {data.title.map((words, index: number) => (
            <Line key={index}>{words}</Line>
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
        {data.hasGpx && (
          <LayoutAside top>
            <Link
              className={styles.link}
              id="skip-to"
              href={`/${data.slug}/${data.index}/gpx`}
            >
              <Title shrink>
                Route / Elevation
                <Subtitle>
                  Gpx Data + All Stats
                </Subtitle>
              </Title>
              <ArrowRight className={styles.icon} />
            </Link>
          </LayoutAside>
        )}
        <Article ariaLabelledBy="main-heading">
          {data.description.map((paragraph, index: number) => (
            <Fragment key={paragraph}>
              <Paragraph>
                {paragraph}
              </Paragraph>
              {index === 0 && (
                <ImageFigure className={styles.figure}>
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
          {data.hasNavigation && (
            <ArticleFooter>
              <Navigation
                next={data.next}
                previous={data.previous}
                slug={data.slug}
              />
            </ArticleFooter>
          )}
        </Article>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
