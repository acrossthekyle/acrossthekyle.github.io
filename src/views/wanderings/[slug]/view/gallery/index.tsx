import type { Stage } from '@/types';
import {
  Image,
  ImageCaption,
  ImageCaptionSubtitle,
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
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={stage.image}
            width={1920}
          >
            <ImageMaximize caption={[stage.index, stage.termini.end.join(' ')]} />
            <ImageCaption>
              <ImageCaptionSubtitle>
                {stage.index} {stage.termini.end.join(' ')}
              </ImageCaptionSubtitle>
            </ImageCaption>
          </Image>
        </ImageFigure>
      ))}
    </section>
  );
}
