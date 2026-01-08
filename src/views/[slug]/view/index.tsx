import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { Article, ArticlePreview, ArticlePreviewMore } from '@/ui/article';
import { HeaderBack, HeaderHeading, HeaderSection } from '@/ui/header';
import {
  Image,
  ImageCaption,
  ImageCaptionCount,
  ImageCaptionEyebrow,
  ImageCaptionSubtitle,
  ImageCaptionTitle,
  ImageFigure,
} from '@/ui/image';
import { Eyebrow, Line, Paragraph, Subtitle } from '@/ui/typography';

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
            <Line key={index}>{words}</Line>
          ))}
          <Subtitle>{data.date}</Subtitle>
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
            {data.stages.map((stage, index: number) => (
              <Article
                ariaLabelledBy={`stage-${stage.index}`}
                hasBorder
                key={stage.index}
              >
                <Link
                  href={`/${data.slug}/${stage.index}`}
                  id={index === 0 ? 'skip-to' : undefined}
                >
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
                      <ImageCaptionTitle id={`stage-${stage.index}`}>
                        <ImageCaptionEyebrow>
                          {stage.location}
                        </ImageCaptionEyebrow>
                        {stage.termini.end.words.map((words) => (
                          <Line key={words}>{words}</Line>
                        ))}
                        <ImageCaptionSubtitle>
                          {stage.date}
                        </ImageCaptionSubtitle>
                      </ImageCaptionTitle>
                    </ImageCaption>
                  </ImageFigure>
                </Link>
                <ArticlePreview>
                  <Paragraph>
                    {stage.description[0]}
                    {stage.description.length > 1 && (
                      <>
                        ..
                        <ArticlePreviewMore
                          href={`/${data.slug}/${stage.index}`}
                          text="read more"
                        />
                      </>
                    )}
                  </Paragraph>
                </ArticlePreview>
              </Article>
            ))}
          </>
        )}
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
