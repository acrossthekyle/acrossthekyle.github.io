import { Ui } from '@/ui';

import { styles } from './stylesheet';

type Props = {
  cover: {
    src: string;
    thumb: string | null;
  } | null;
};

export default function Image({ cover }: Props) {
  return (
    <>
      {cover !== null && (
        <figure className={styles.figure}>
          <Ui.Image
            className={styles.image}
            src={cover.src}
            thumb={cover.thumb || ''}
          />
        </figure>
      )}
    </>
  );
}
