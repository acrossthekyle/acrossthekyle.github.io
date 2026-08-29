'use client';

import tw from '@/styles';
import type { Image } from '@/types';

import { useModel } from './model';

import {
  Item,
  ItemAnchor,
  ItemAnchorImage,
  ItemAnchorImageCaption,
} from './components';

type Props = {
  images: Image[];
};

export default function Snapshots({ images }: Props) {
  const { active, handleOnClick } = useModel();

  return (
    <article aria-label="snapshots" className={styles.container} id="snapshots">
      <ul className="relative">
        {images.map((image, index) => {
          const isExpanded = index === active;

          return (
            <Item index={index} isExpanded={isExpanded} key={image.src}>
              <ItemAnchor
                index={index}
                isExpanded={isExpanded}
                onClick={() => handleOnClick(index)}
              >
                <ItemAnchorImage image={image} isExpanded={isExpanded} />
                {isExpanded && (
                  <ItemAnchorImageCaption image={image} />
                )}
              </ItemAnchor>
            </Item>
          );
        })}
      </ul>
    </article>
  );
};

const styles = tw({
  container: `
    relative
    p-6 pb-4
  `,
});
