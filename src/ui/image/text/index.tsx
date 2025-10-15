import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Text({ children }: Props) {
  return (
    <span className={styles.text}>
      {children}
    </span>
  );
}
