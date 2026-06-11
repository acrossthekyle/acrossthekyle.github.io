import { styles } from './stylesheet';

export default function Local() {
  return (
    <span className={styles.container}>
      <span className={styles.fade}>Local / </span><strong>41.8781° N, 87.6298° W</strong>
    </span>
  );
}
