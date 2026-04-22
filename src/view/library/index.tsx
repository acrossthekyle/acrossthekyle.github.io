'use client';

import { Fragment } from 'react';
import { InView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album, Data, FilterBy } from '@/types';

import { Image } from '../ui/image';

import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy?: FilterBy;
};

export default function Library({ data, filterBy }: Props) {
  const { onOpen } = useDialog();
  const { current } = useView();

  const handleOnClick = (item: Album, image: Data) => {
    onOpen({
      data: {
        album: item,
        image,
      },
      template: 'library',
    });
  };

  return (
    <div className={styles.mountable(current === 'library')}>
      <ul className={styles.grid}>
        {data
          .filter(({ category, id }) => {
            if (!!filterBy?.category) {
              return category === filterBy?.category
            }

            if (!!filterBy?.id) {
              return id === filterBy?.id
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
                            className={styles.cta}
                            onClick={() => handleOnClick(album, image)}
                            type="button"
                          >
                            <Image
                              className={styles.image}
                              src={image.src}
                            />
                          </button>
                          <figcaption className={styles.caption}>
                            <span className={styles.faded}>{image.date}</span>
                            {image.location}, {album.location}
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
    </div>
  );
}
