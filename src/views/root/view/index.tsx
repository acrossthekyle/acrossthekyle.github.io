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
          Experiencing new sights and sounds keeps me moving.
          <Subtitle>Wandering is life</Subtitle>
        </HeaderHeading>
        <HeaderSection>
          <Paragraph>
            I've spent the last {new Date().getFullYear() - 2018} years exploring the world.
          </Paragraph>
          <Paragraph>
            The mountains are my church, and after hiking thousands of miles nothing inspires me more than leaving the crowded city behind and heading into nature carrying everything I need on my back. If I can walk dozens of miles every day for a weeks on end, I can do anything.
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
