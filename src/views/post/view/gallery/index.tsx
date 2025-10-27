import type { Stage } from '@/types';
import { Image, ImageMaximize } from '@/ui/image';

import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Gallery({ stages }: Props) {
  const midIndex = Math.ceil(stages.length / 2);
  const firstHalf = stages.slice(0, midIndex);
  const secondHalf = stages.slice(midIndex);

  return (
    <div className={styles.container}>
      {[firstHalf, secondHalf].map((half, index) => (
        <div className={styles.half} key={index}>
          {half.map((stage) => (
            <div className="relative" key={stage.index}>
              <Image
                alt=""
                height={1080}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={stage.image}
                width={1920}
              >
                <ImageMaximize
                  caption={[stage.termini.end.join(' '), stage.date]}
                />
              </Image>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
