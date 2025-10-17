import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Count({ children }: Props) {
  return (
    <span className={styles.index}>
      {children}
    </span>
  );
}
