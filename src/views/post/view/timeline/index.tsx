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
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  label: string;
  slug: string;
  stages: Stage[];
  type: string;
};

export default function Pictures({ label, slug, stages, type }: Props) {
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
              href={`/blog/${type}/${slug}/${padIndex(index + 1)}`}
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
                href={`/blog/${type}/${slug}/${padIndex(index + 1)}`}
                title={`Learn more about ${stage.termini.end.join(' ')}`}
              >
                <ImageCaptionEyebrow>
                  {label} {padIndex(index + 1)}
                </ImageCaptionEyebrow>
                <ImageCaptionText>
                  {stage.termini.end.map((word) => (
                    <span className="block" key={word}>{word}</span>
                  ))}
                </ImageCaptionText>
                <ImageCaptionSubtitle>
                  {stage.date}
                </ImageCaptionSubtitle>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
        </li>
      ))}
    </ul>
  );
}
