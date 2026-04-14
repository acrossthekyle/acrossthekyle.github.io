import Clock from './clock';
import Eggs from './eggs';
import Hierarchy from './hierarchy';
import styles from './stylesheet';

export default function Meta() {
  return (
    <div className={styles.container}>
      <p className={styles.cell}>
        <Clock />
        <span>41.8781° N, 87.6298° W</span>
        <span>Sol, Orion Spur, Milky Way</span>
      </p>
      <Eggs />
      <p className={styles.cell}>
        <span>HTML / CSS / Java[Type]Script</span>
        <span>JSON / MD</span>
        <span>React / NextJS / Tailwind</span>
      </p>
      <Hierarchy />
    </div>
  );
}
