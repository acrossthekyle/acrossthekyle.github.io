import { padIndex } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  current: number;
  total: number;
};

export default function Total({ current, total }: Props) {
  return (
    <span className={styles.container}>
      Image {padIndex(current + 1)} /&nbsp;<span className={styles.highlight}>{padIndex(total)}</span>
    </span>
  );
}
