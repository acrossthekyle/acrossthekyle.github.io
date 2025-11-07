'use client';

import { useEffect, useState } from 'react';

import type { Stage } from '@/types';
import { useLoad } from '@/hooks/useLoad';
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
  const { path, previous } = useLoad();

  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const isFromParent = previous.split('/').filter(Boolean).length === 2;

    if (isFromParent) {
      const timeout = setTimeout(() => {
        setCanAnimate(false);
      }, 750);

      return () => clearTimeout(timeout);
    } else {
      setCanAnimate(false);
    }
  }, [path, previous]);

  return (
    <ul className={styles.list}>
      {stages.map((stage, index) => (
        <li
          className={styles.item(canAnimate)}
          key={index}
          style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
        >
          <ImageFigure>
            <Image
              alt={stage.termini.end.words.join(' ')}
              height={1080}
              index={index}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={stage.image}
              width={1920}
            >
              <ImageMaximize />
            </Image>
            <ImageCaption>
              <ImageLink
                label={`Learn more about ${stage.termini.end.words.join(' ')}`}
                href={`/wanderings/${slug}/${stage.index}`}
              >
                <ImageCaptionEyebrow>
                  {stage.date}
                </ImageCaptionEyebrow>
                <ImageCaptionText>
                  {stage.termini.end.words.map((word) => (
                    <span className={styles.line} key={word}>
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
