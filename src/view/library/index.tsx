'use client';

import { InView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useOptions } from '@/hooks/useOptions';
import { useSort } from '@/hooks/useSort';
import { useView } from '@/hooks/useView';
import type { Collection, Data } from '@/types';
import { Ui } from '@/ui';

import Image from './image';
import Info from './info';
import styles from './stylesheet';
import { getImage, getDelay } from './utils';

type Props = {
  collections: Collection[];
  images: Data[];
};

export default function Library({ collections, images }: Props) {
  const { onDialog } = useDialog();
  const { view, onView } = useView();
  const { filter, onFilter } = useFilter();
  const { color } = useOptions();
  const { sort } = useSort();

  const handleOnClick = (image: Data) => {
    onDialog({
      data: {
        image,
      },
      delay: true,
      template: 'image',
    });
  };

  const handleOnCategory = (category: string) => {
    onFilter(category);

    onView('category');
  };

  const handleOnCollection = (id: string) => {
    onFilter(id);

    onView('collection');
  };

  const handleOnLocation = (location: string) => {
    onFilter(location);

    onView('continent');
  };

  const filtered = images.filter(image => getImage(image, filter, view));
  const sorted = sort === 1 ? [...filtered].reverse() : filtered;

  return (
    <Ui.Containers.Mountable
      className={styles.container}
      isActive={view !== 'collections'}
    >
      <Info collections={collections} images={images} />
      <ul className={styles.grid} key={filter}>
        {sorted.map((image, index: number) => {
          const delay = getDelay(index);

          return (
            <InView key={image.src} threshold={0} triggerOnce>
              {({ inView, ref }) => (
                <li
                  className={styles.cell(inView)}
                  ref={ref}
                  style={{
                    transitionDelay: `${delay}s`,
                  }}
                >
                  <Image
                    colorMode={color}
                    image={image}
                    onCategory={handleOnCategory}
                    onClick={handleOnClick}
                    onCollection={handleOnCollection}
                    onLocation={handleOnLocation}
                  />
                </li>
              )}
            </InView>
          );
        })}
      </ul>
    </Ui.Containers.Mountable>
  );
}
