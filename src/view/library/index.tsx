'use client';

import { Fragment, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';

import { Dialog } from '../dialog';
import type { Album, Data } from '../types';
import { Image } from '../ui/image';

import Details from './details';
import styles from './stylesheet';

type Props = {
  data: Album[];
  isActive: boolean;
};

export default function Library({ data, isActive }: Props) {
  const [active, setActive] = useState({
    album: {},
    image: {},
  });

  const { onOpen } = useDialog();

  const handleOnClick = (item: Album, image: Data) => {
    onOpen();

    setActive({
      album: item,
      image,
    });
  };

  if (!isActive) {
    return null;
  }

  return (
    <>
      <ul className={styles.grid}>
        {data.map((album) => (
          <Fragment key={album.id}>
            {album.images.map((image) => (
              <li key={image.src}>
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
            ))}
          </Fragment>
        ))}
      </ul>
      <Dialog id="details">
        <Details data={active} />
      </Dialog>
    </>
  );
}
