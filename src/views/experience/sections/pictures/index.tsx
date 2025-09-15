import Link from 'next/link';

import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageFigure,
  ImageOptions,
  ImagePlaceholder,
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
      {stages.map((stage, index) => {
        const anchor = String(index + 1).padStart(2, '0');

        return (
          <li className={styles.item} key={index}>
            <div aria-hidden="true" id={anchor} />
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
                  <Link
                    className="absolute inset-0 z-5"
                    href={`${slug}/${anchor}`}
                  />
                  <ImageCaption>
                    <ImageCaptionEyebrow>
                      {anchor}.{' '}
                      {!stage.termini.isSame ? `${stage.termini.start.join(' ')} To` : stage.location}
                    </ImageCaptionEyebrow>
                    {stage.termini.end.map((word) => (
                      <span className="block" key={word}>{word}</span>
                    ))}
                  </ImageCaption>
                  <ImageSkeleton />
                </ImagePlaceholder>
              </Image>
            </ImageFigure>
          </li>
        );
      })}
    </ul>
  );
}
