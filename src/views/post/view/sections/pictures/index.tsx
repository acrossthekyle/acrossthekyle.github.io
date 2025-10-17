import { ArrowUpRight } from 'lucide-react';

import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionSubtitle,
  ImageCaptionText,
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
                  alt={stage.termini.end.join(' ')}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1920}
                />
                <ImageMaximize
                  caption={stage.termini.end}
                  eyebrow={`${String(index + 1).padStart(2, '0')}.`}
                  subtitle={stage.date}
                />
                <ImageCaption>
                  <ImageLink
                    href={
                      (stage.hasPost || stage.hasStats)
                        ? `/blog/${slug}/${String(index + 1).padStart(2, '0')}`
                        : undefined
                    }
                  >
                    <ImageCaptionEyebrow>
                      {String(index + 1).padStart(2, '0')}.
                    </ImageCaptionEyebrow>
                    <ImageCaptionText>
                      {stage.termini.end.map((word) => (
                        <span className="block" key={word}>{word}</span>
                      ))}
                    </ImageCaptionText>
                    <ImageCaptionSubtitle>
                      {stage.date}
                      {(stage.hasPost || stage.hasStats) && (
                        <span className={styles.more}>
                          {' '}• {stage.hasPost ? 'Learn More' : 'View Stats'}
                          <ArrowUpRight className={styles.arrow} />
                        </span>
                      )}
                    </ImageCaptionSubtitle>
                  </ImageLink>
                </ImageCaption>
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
