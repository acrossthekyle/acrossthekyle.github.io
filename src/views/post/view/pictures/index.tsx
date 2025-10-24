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
} from '@/ui/image';
import { padIndex } from '@/utils';

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
            <Image
              alt={stage.termini.end.join(' ')}
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={stage.image}
              width={1920}
            >
              <ImageMaximize
                caption={stage.termini.end}
                eyebrow={`${padIndex(index + 1)}.`}
                subtitle={stage.date}
              />
              <ImageCaption>
                <ImageLink
                  href={
                    (stage.hasPost || stage.hasStats)
                      ? `/blog/${slug}/${padIndex(index + 1)}`
                      : undefined
                  }
                >
                  <ImageCaptionEyebrow>
                    {padIndex(index + 1)}.
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
            </Image>
          </ImageFigure>
        </li>
      ))}
    </ul>
  );
}
