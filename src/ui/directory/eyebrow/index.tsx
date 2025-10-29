import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function DirectoryEyebrow({ children }: Props) {
  return (
    <span className={styles.eyebrow}>
      {children}
    </span>
  );
}
