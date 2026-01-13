'use client';

import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { Article, ArticlePreview, ArticlePreviewMore } from '@/ui/article';
import { HeaderHeading, HeaderSection } from '@/ui/header';
import {
  Image,
  ImageCaption,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageCaptionSubtitle,
  ImageCaptionTitle,
  ImageFigure,
} from '@/ui/image';
import { Line, Paragraph, Subtitle } from '@/ui/typography';

import Filter from './filter';
import { useModel } from './model';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <>
      <LayoutHeader route="/">
        <HeaderHeading>
          A backpacker and software engineer making moves.
          <Subtitle>Wandering is life, Coding is living</Subtitle>
        </HeaderHeading>
        <HeaderSection>
          <Paragraph>
            Hey, I'm Kyle.
          </Paragraph>
          <Paragraph>
            I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span>, and I've spent the past {new Date().getFullYear() - 2012} years building parts of the web that you probably use today, and the last {new Date().getFullYear() - 2018} years exploring the world.
          </Paragraph>
          <Paragraph>
            Follow my wanderings on <Link
              aria-label="view instagram profile"
              className={styles.link}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </Paragraph>
        </HeaderSection>
      </LayoutHeader>
      <LayoutMain>
        <Filter data={data} onChange={handleOnFilter} />
        {items.map((item, index: number) => (
          <Article hasBorder key={index}>
            <Link
              href={`/${item.slug}${item.count === 1 ? '/01' : ''}`}
              id={index === 0 ? 'skip-to' : undefined}
            >
              <ImageFigure scale>
                <Image
                  alt=""
                  height={1080}
                  index={index}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={item.image}
                  width={1920}
                />
                <ImageCaption>
                  <ImageCaptionCount>
                    {item.index}
                  </ImageCaptionCount>
                  <ImageCaptionTitle>
                    <ImageCaptionEyebrow>
                      {item.location}
                    </ImageCaptionEyebrow>
                    {item.title.map((words) => (
                      <Line key={words}>{words}</Line>
                    ))}
                    <ImageCaptionSubtitle>
                      {item.date}
                    </ImageCaptionSubtitle>
                  </ImageCaptionTitle>
                </ImageCaption>
              </ImageFigure>
            </Link>
            <ArticlePreview>
              <Paragraph>
                {item.description[0]}..
                <ArticlePreviewMore
                  href={`/${item.slug}${item.count === 1 ? '/01' : ''}`}
                  text="learn more"
                />
              </Paragraph>
            </ArticlePreview>
          </Article>
        ))}
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
