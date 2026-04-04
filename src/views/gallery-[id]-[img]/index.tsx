import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
} from '@/ui/header';
import { Image } from '@/ui/image';
import { padIndex } from '@/utils';

import Caption from './caption';
import styles from './stylesheet';

type Props = {
   data: {
    album: {
      id: string;
      title: string;
    };
    image: {
      src: string;
      title: string;
    };
    index: number;
   };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ IMG-{padIndex(data.index)} ]</HeaderEyebrow>
      </Header>
      <Link className={styles.album} href={`/gallery/${data.album.id}`}>
        Back to {data.album.title} album
      </Link>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          size="large"
          src={data.image.src}
        />
        <Caption src={data.image.src} />
      </figure>
    </>
  );
}
