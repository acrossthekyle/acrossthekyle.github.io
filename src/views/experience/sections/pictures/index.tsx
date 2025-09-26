import { ArrowUpRight, MoveDiagonal2 } from 'lucide-react';

import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionSubtitle,
  ImageFigure,
  ImageLink,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageRotateWarning,
  ImageSkeleton,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  slug: string;
  stages: Stage[];
};

export default function Pictures({ slug, stages }: Props) {
  return (
    <ul className={styles.list}>
      {stages.map((stage, index) => (
        <li className={styles.item} key={index}>
          <ImageFigure>
            <Image src={stage.image}>
              <ImagePlaceholder>
                <ImageOptions
                  alt={
                    !stage.termini.isSame
                      ? `${stage.termini.start.join(' ')} To ${stage.termini.end.join(' ')}`
                      : stage.location
                  }
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1920}
                />
                {stage.hasPost ? (
                  <ImageCaption>
                    <ImageCaptionEyebrow>
                      {String(index + 1).padStart(2, '0')}.
                    </ImageCaptionEyebrow>
                    {stage.termini.end.map((word) => (
                      <span className="block" key={word}>{word}</span>
                    ))}
                    <ImageCaptionSubtitle>
                      {stage.date} • {stage.readingTime} min read
                      <ArrowUpRight aria-hidden="true" className={styles.arrow} />
                    </ImageCaptionSubtitle>
                  </ImageCaption>
                ) : (
                  <ImageCaption>
                    <ImageCaptionSubtitle>
                      {stage.termini.end.join(' ')} - {stage.date}
                      <MoveDiagonal2 aria-hidden="true" className={styles.arrow} />
                    </ImageCaptionSubtitle>
                  </ImageCaption>
                )}
                {stage.hasPost ? (
                  <ImageLink
                    href={`/experiences/${slug}/${String(index + 1).padStart(2, '0')}`}
                  />
                ) : (
                  <ImageMaximize
                    caption={`${stage.termini.end.join(' ')} - ${stage.date}`}
                  />
                )}
                <ImageRotateWarning />
                <ImageSkeleton />
              </ImagePlaceholder>
            </Image>
          </ImageFigure>
        </li>
      ))}
    </ul>
  );
}
