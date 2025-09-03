import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Subtext({ children }: Props) {
  return (
    <span className={styles.container}>
      {children}
    </span>
  );
}
