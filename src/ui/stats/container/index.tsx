import styles from './stylesheet';

type Props = {
  columns: number;
};

export default function Stats({
  children,
  columns,
}: React.PropsWithChildren<Props>) {
  return (
    <ul aria-label="stats" className={styles.container(columns)}>
      {children}
    </ul>
  );
}
