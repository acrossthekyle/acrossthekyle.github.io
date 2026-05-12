'use client';

import { InView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useOptions } from '@/hooks/useOptions';
import { useView } from '@/hooks/useView';
import type { Collection, Data } from '@/types';
import { Ui } from '@/ui';

import { useImages } from './hooks';
import Image from './image';
import Info from './info';
import styles from './stylesheet';
import { getDelay, getRatio } from './utils';

type Props = {
  collections: Collection[];
  images: Data[];
};

export default function Library({ collections, images }: Props) {
  const { onDialog } = useDialog();
  const { view, onView } = useView();
  const { filter, onFilter } = useFilter();
  const { color } = useOptions();
  const { columns, sorted } = useImages(images);

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

  return (
    <Ui.Containers.Mountable
      className={styles.container}
      isActive={view !== 'collections'}
    >
      <Info collections={collections} images={images} />
      <div className={styles.masonry} key={filter}>
        {columns.map((items, index) => (
          <ul className={styles.grid} key={index}>
            {items.map((image) => (
              <InView key={image.src} threshold={0} triggerOnce>
                {({ inView, ref }) => (
                  <li
                    className={styles.cell(inView)}
                    ref={ref}
                    style={{
                      transitionDelay: `${getDelay(sorted.indexOf(image))}s`,
                    }}
                  >
                    <Image
                      colorMode={color}
                      image={image}
                      onCategory={handleOnCategory}
                      onClick={handleOnClick}
                      onCollection={handleOnCollection}
                      onLocation={handleOnLocation}
                      ratio={getRatio(image.src)}
                    />
                  </li>
                )}
              </InView>
            ))}
          </ul>
        ))}
      </div>
    </Ui.Containers.Mountable>
  );
}
