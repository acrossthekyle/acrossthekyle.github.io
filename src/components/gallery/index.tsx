'use client';

import tw from '@/styles';
import type { Image } from '@/types';

import { useModel } from './model';

import {
  Item,
  ItemAnchor,
  ItemAnchorClose,
  ItemAnchorImage,
  ItemAnchorImageCaption,
  ItemAnchorImageExpand,
  ItemInner,
} from './components';

type Props = {
  images: Image[];
};

export default function Snapshots({ images }: Props) {
  const { active, expanded, handleOnClick, handleOnExpand } = useModel();

  return (
    <article aria-label="snapshots" className={styles.container} id="snapshots">
      <ul className="relative">
        {images.map((image, index) => {
          const isActive = index === active;
          const isExpanded = index === expanded;

          return (
            <Item index={index} isActive={isActive} key={image.src}>
              <ItemInner isActive={isActive} isExpanded={isExpanded}>
                <ItemAnchor
                  isExpanded={isExpanded}
                  onClick={() => handleOnClick(index)}
                >
                  <ItemAnchorClose
                    isActive={isActive}
                    isExpanded={isExpanded}
                  />
                  <ItemAnchorImage
                    image={image}
                    isActive={isActive}
                    isExpanded={isExpanded}
                  />
                  {isActive && (
                    <ItemAnchorImageCaption
                      image={image}
                      isExpanded={isExpanded}
                    />
                  )}
                </ItemAnchor>
                <ItemAnchorImageExpand
                  isActive={isActive}
                  isExpanded={isExpanded}
                  onClick={() => handleOnExpand(index)}
                />
              </ItemInner>
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
  `,
});
