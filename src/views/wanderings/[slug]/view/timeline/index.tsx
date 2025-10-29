import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionSubtitle,
  ImageCaptionText,
  ImageFigure,
  ImageLink,
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
        <li
          className={styles.item}
          key={index}
          style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
        >
          <ImageFigure>
            <ImageLink
              href={`/wanderings/${slug}/${stage.index}`}
              title={`Learn more about ${stage.termini.end.join(' ')}`}
            >
              <Image
                alt={stage.termini.end.join(' ')}
                height={1080}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={stage.image}
                width={1920}
              />
            </ImageLink>
            <ImageCaption>
              <ImageLink
                href={`/wanderings/${slug}/${stage.index}`}
                title={`Learn more about ${stage.termini.end.join(' ')}`}
              >
                <ImageCaptionEyebrow>
                  {stage.date}
                </ImageCaptionEyebrow>
                <ImageCaptionText>
                  {stage.termini.end.map((word, position) => (
                    <span className="block" key={word}>
                      {word}
                      {position === stage.termini.end.length - 1 && (
                        <span className="inline-block ml-1.5 font-light text-xs tracking-normal">
                          {stage.index}
                        </span>
                      )}
                    </span>
                  ))}
                </ImageCaptionText>
                <ImageCaptionSubtitle>
                  {stage.hasPost && 'Overview, '}Route & Elevation Charts{stage.hasStats && ', Stats'}
                </ImageCaptionSubtitle>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
        </li>
      ))}
    </ul>
  );
}
