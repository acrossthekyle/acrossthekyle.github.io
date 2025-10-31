import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionText,
  ImageFigure,
  ImageLink,
  ImageMaximize,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  slug: string;
  stages: Stage[];
};

export default function Timeline({ slug, stages }: Props) {
  return (
    <ul className={styles.list}>
      {stages.map((stage, index) => (
        <li
          className={styles.item}
          key={index}
          style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
        >
          <ImageFigure>
            <Image
              alt={stage.termini.end.join(' ')}
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={stage.image}
              width={1920}
            >
              <ImageMaximize />
            </Image>
            <ImageCaption>
              <ImageLink
                label={`Learn more about ${stage.termini.end.join(' ')}`}
                href={`/wanderings/${slug}/${stage.index}`}
              >
                <ImageCaptionEyebrow>
                  {stage.date}
                </ImageCaptionEyebrow>
                <ImageCaptionText>
                  {stage.termini.end.map((word) => (
                    <span className="block" key={word}>
                      {word}
                    </span>
                  ))}
                </ImageCaptionText>
              </ImageLink>
            </ImageCaption>
          </ImageFigure>
        </li>
      ))}
    </ul>
  );
}
