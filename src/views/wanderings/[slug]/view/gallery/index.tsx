import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageInfo,
  ImageFigure,
  ImageMaximize,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Gallery({ stages }: Props) {
  return (
    <section className={styles.container} aria-label="gallery">
      {stages.map((stage) => (
        <ImageFigure key={stage.index}>
          <Image
            alt=""
            className={styles.image(stage.index)}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={stage.image}
            width={1920}
          >
            <ImageMaximize />
            <ImageCaption>
              <ImageInfo>
                {stage.termini.end.join(' ')}
              </ImageInfo>
            </ImageCaption>
          </Image>
        </ImageFigure>
      ))}
    </section>
  );
}
