import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

type Props = {
  theme: string;
  units: string;
};

export default function Footer({ theme, units }: Props) {
  return (
    <footer className={styles.container}>
      <Theme current={theme} />
      <Units current={units} />
    </footer>
  );
}
