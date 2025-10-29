import type { Stage } from '@/types';
import { Image, ImageCaption, ImageCaptionSubtitle, ImageFigure, ImageMaximize } from '@/ui/image';

import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Gallery({ stages }: Props) {
  const midIndex = Math.ceil(stages.length / 2);
  const firstHalf = stages.slice(0, midIndex);
  const secondHalf = stages.slice(midIndex);

  return (
    <>
      <div className={styles.container}>
        {[firstHalf, secondHalf].map((half, index) => (
          <div className={styles.half} key={index}>
            {half.map((stage) => (
              <ImageFigure className={styles.cell} key={stage.index}>
                <Image
                  alt=""
                  className={styles.image(index)}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={stage.image}
                  width={1920}
                >
                  <ImageMaximize caption={[stage.index]} />
                  <ImageCaption>
                    <ImageCaptionSubtitle>
                      {stage.index}
                    </ImageCaptionSubtitle>
                  </ImageCaption>
                </Image>
              </ImageFigure>
            ))}
          </div>
        ))}
      </div>
      <ul aria-label="gallery images index">
        {stages.map(({ index, termini }) => (
          <li className={styles.item} key={index}>
            <span className={styles.index}>{index}.</span> {termini.end.join(' ')}
          </li>
        ))}
      </ul>
    </>
  );
}
