import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
} from '@/ui/header';
import { Image } from '@/ui/image';
import { Highlight } from '@/ui/typography';
import { padIndex } from '@/utils';

import Caption from './caption';
import Keyboard from './keyboard';
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
    next?: string | null;
    previous?: string | null;
   };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ {data.image.src.split('-').pop()} ]</HeaderEyebrow>
        IMG {padIndex(data.index + 1)}
        <HeaderSubtitle>
          {data.album.title} &ndash; <Highlight>{data.image.title}</Highlight>
        </HeaderSubtitle>
      </Header>
      <Link className={styles.album} href={`/gallery/${data.album.id}`}>
        Back to album
      </Link>
      <Caption src={data.image.src} />
      <div className={styles.figure}>
        <Image
          className={styles.image}
          size="large"
          src={data.image.src}
        />
      </div>
      <nav
        aria-label="next previous supplementary navigation"
        className={styles.navigation}
      >
        {data.previous && (
          <Link
            href={`/gallery/${data.album.id}/${data.previous}`}
          >
            Previous
          </Link>
        )}
        {data.next && (
          <Link href={`/gallery/${data.album.id}/${data.next}`}>Next</Link>
        )}
      </nav>
      <Keyboard
        albumId={data.album.id}
        next={data.next}
        previous={data.previous}
      />
    </>
  );
}
