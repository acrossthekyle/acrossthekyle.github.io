import type { Stage } from '@/types';
import {
  Image,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageSkeleton,
} from '@/ui/image';

import Caption from './caption';
import styles from './stylesheet';

type Props = {
  stage: Stage;
};

export default function Figure({ stage }: Props) {
  return (
    <figure className={styles.figure}>
      <Image src={stage.images.hero}>
        <ImagePlaceholder>
          <ImageMaximize>
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
          </ImageMaximize>
          <Caption stage={stage} />
          <ImageSkeleton />
        </ImagePlaceholder>
      </Image>
    </figure>
  );
}
