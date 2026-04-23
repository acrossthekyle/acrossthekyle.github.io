import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

type Props = {
  isFiltering: boolean;
  theme: string;
  units: string;
};

export default function Footer({ isFiltering, theme, units }: Props) {
  return (
    <footer className={styles.container}>
      <section
        aria-label="theme controls"
        className={styles.controls(!isFiltering)}
      >
        <Theme current={theme} />
      </section>
      <section
        aria-label="units controls"
        className={styles.controls(!isFiltering)}
      >
        <Units current={units} />
      </section>
    </footer>
  );
}
