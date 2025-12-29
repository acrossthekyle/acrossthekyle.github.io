import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  label?: string;
  superscript?: string;
};

export default function Count({ children, label, superscript }: Props) {
  return (
    <span className={styles.container}>
      {!!label && label} #{children}
      {!!superscript && (
        <sup className={styles.superscript}>{superscript}</sup>
      )}
    </span>
  );
}
