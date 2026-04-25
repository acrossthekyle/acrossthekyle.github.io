'use client';

import { Fragment } from 'react';
import { InView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useView } from '@/hooks/useView';
import type { Album, Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

export default function Library({ data }: Props) {
  const { onOpen } = useDialog();
  const { view } = useView();
  const { filterId, filterType, isFiltering } = useFilter();

  const handleOnClick = (item: Album, image: Data) => {
    onOpen({
      data: {
        album: item,
        image,
      },
      template: 'image',
    });
  };

  return (
    <Ui.Containers.Mountable isActive={view === 'library'}>
      <ul className={styles.grid}>
        {data
          .filter((item) => {
            if (isFiltering) {
              const value = filterType === 'category' ? item.category : item.id;

              return value.toLowerCase() === filterId;
            }

            return true;
          })
          .map((album, albumIndex: number) => (
            <Fragment key={album.id}>
              {album.images.map((image, imageIndex: number) => {
                const delays = [0.25, 0.125, 0.375, 0];

                const isInitialBatch = albumIndex === 0 && imageIndex < 8;
                const currentDelay = isInitialBatch ? 0 : delays[imageIndex % 4];

                return (
                  <InView key={image.src} threshold={0} triggerOnce>
                    {({ inView, ref }) => (
                      <li
                        className={styles.cell(inView, isInitialBatch)}
                        ref={ref}
                        style={{
                          transitionDelay: `${currentDelay}s`,
                        }}
                      >
                        <figure>
                          <button
                            aria-label="view image details"
                            className={styles.cta}
                            onClick={() => handleOnClick(album, image)}
                            type="button"
                          >
                            <Ui.Images.Image
                              className={styles.image}
                              src={image.src}
                            />
                          </button>
                          <figcaption className={styles.caption}>
                            {image.date}
                            <span className={styles.faded}>
                              {image.location}, {album.location}
                            </span>
                          </figcaption>
                        </figure>
                      </li>
                    )}
                  </InView>
                );
              })}
            </Fragment>
        ))}
      </ul>
    </Ui.Containers.Mountable>
  );
}
