import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Label({ children }: Props) {
  return (
    <span className={styles.label}>
      {children}
    </span>
  );
}
