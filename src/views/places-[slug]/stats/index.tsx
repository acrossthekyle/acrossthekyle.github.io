import Stat from './stat';

import styles from './stylesheet';

type Props = {
  stats: Array<{
    label: string;
    value: {
      basic: string;
      complex: Array<{
        imperial: string;
        metric: string;
      }>;
    };
  }>;
};

export default function Stats({ stats }: Props) {
  return (
    <ul aria-label="stats" className={styles.stats}>
      {stats.map((stat) => (
        <li key={stat.label}>
          <Stat label={stat.label} value={stat.value} />
        </li>
      ))}
    </ul>
  );
}
