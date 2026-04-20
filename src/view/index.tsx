import Albums from './albums';
import Library from './library';
import styles from './stylesheet';
import type { Album } from './types';

type Props = {
  data: Album[];
  view: string;
};

export default function View({ data, view }: Props) {
  return (
    <div className={styles.container}>
      <Albums data={data} isActive={view === 'albums'} />
      <Library data={data} isActive={view === 'library'} />
    </div>
  );
}
