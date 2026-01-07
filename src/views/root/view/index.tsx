'use client';

import { Filter } from 'lucide-react';
import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderHeading, HeaderSection, HeaderSearch } from '@/ui/header';
import {
  Image,
  ImageCaption,
  ImageCaptionContent,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageFigure,
} from '@/ui/image';
import { Paragraph } from '@/ui/typography';

import Dialog from './filter';
import { useModel } from './model';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const {
    handleOnFilter,
    handleOnToggle,
    handleOnSearch,
    isActive,
    items,
    searchBy,
  } = useModel(data);

  return (
    <>
      <LayoutHeader>
        <HeaderHeading>
          A backpacker and software engineer always seeking new ways to move forward.
        </HeaderHeading>
        <HeaderSection>
          <Paragraph>
            Hey, I'm Kyle.
          </Paragraph>
          <Paragraph>
            I live on the lands belonging to the <span className={styles.emphasis}>Potawatomi</span>, <span className={styles.emphasis}>Ojibwe</span>, and <span className={styles.emphasis}>Odawa</span> &mdash; otherwise known as the city of <span className={styles.emphasis}>Chicago</span>, and I've spent the past {new Date().getFullYear() - 2012} years building parts of the web that you probably use today, and the last {new Date().getFullYear() - 2018} years exploring the world.
          </Paragraph>
        </HeaderSection>
        <HeaderSection>
          <HeaderSearch onChange={handleOnSearch} searchBy={searchBy}>
            <button
              aria-label="filter and sort"
              className={styles.filter}
              onClick={handleOnToggle}
              type="button"
            >
              <Filter className={styles.icon} />
            </button>
          </HeaderSearch>
          <Dialog
            data={data}
            isActive={isActive}
            onChange={handleOnFilter}
            onClose={handleOnToggle}
          />
        </HeaderSection>
      </LayoutHeader>
      <LayoutMain>
        {items.map((item, index: number) => (
          <article className={styles.article} key={index}>
            <Link
              href={`/${item.slug}${item.count === 1 ? '/01' : ''}`}
              id={index === 0 ? 'first-article' : undefined}
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
                  <ImageCaptionContent>
                    <ImageCaptionEyebrow>
                      {item.location}
                    </ImageCaptionEyebrow>
                    {item.title.map((words) => (
                      <span className="block" key={words}>{words}</span>
                    ))}
                  </ImageCaptionContent>
                </ImageCaption>
              </ImageFigure>
            </Link>
            <section aria-label="preview" className={styles.preview}>
              <span className={styles.date}>
                {item.date} &mdash; {item.type}
              </span>
              <Paragraph>
                {item.description[0]}..
              </Paragraph>
            </section>
          </article>
        ))}
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
