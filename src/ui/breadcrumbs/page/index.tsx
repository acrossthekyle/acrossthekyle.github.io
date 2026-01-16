import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={styles.container}
      role="link"
    >
      {children}
    </span>
  );
}
