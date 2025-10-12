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
                  alt={stage.termini.end.join(' ')}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1920}
                />
                <ImageCaption>
                  <ImageCaptionEyebrow>
                    {String(index + 1).padStart(2, '0')}.
                  </ImageCaptionEyebrow>
                  {stage.termini.end.map((word) => (
                    <span className="block" key={word}>{word}</span>
                  ))}
                  <ImageCaptionSubtitle>
                    {stage.date}
                  </ImageCaptionSubtitle>
                </ImageCaption>
                <ImageMaximize
                  caption={stage.termini.end}
                  eyebrow={`${String(index + 1).padStart(2, '0')}.`}
                  subtitle={stage.date}
                />
                {(stage.hasPost || stage.hasStats) && (
                  <ImageLink
                    href={`/experiences/${slug}/${String(index + 1).padStart(2, '0')}`}
                  >
                    {stage.hasPost ? (
                      <>Learn More</>
                    ) : (
                      <>View Stats</>
                    )}
                  </ImageLink>
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
