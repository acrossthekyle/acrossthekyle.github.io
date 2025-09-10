import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageFigure,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageRotateWarning,
  ImageSkeleton,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Pictures({ stages }: Props) {
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
                <ImageCaption>
                  <ImageCaptionEyebrow>
                    {String(index + 1).padStart(2, '0')}.{' '}
                    {!stage.termini.isSame ? `${stage.termini.start.join(' ')} To` : stage.location}
                  </ImageCaptionEyebrow>
                  {stage.termini.end.map((word) => (
                    <span className="block" key={word}>{word}</span>
                  ))}
                </ImageCaption>
                <ImageMaximize />
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
