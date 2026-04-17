import data from '@/db/config';

import Callouts from './callouts';
import Jump from './jump';
import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

type Props = {
  theme: string;
  trail: {
    id: string;
    title: string;
  };
};

export default function Fixed({ theme, trail }: Props) {
  return (
    <div className={styles.container}>
      <Callouts trail={trail} />
      <p className={styles.copyright}>
        Compiled on {data.lastUpdated}. Continously copyrighted since 2011. All bits reserved.
      </p>
      <div className="flex justify-end items-center gap-4">
        <Units />
        <Theme current={theme} />
        <Jump />
      </div>
    </div>
  );
}
