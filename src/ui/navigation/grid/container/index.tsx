import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <>
      <hr className={styles.hr} />
      <nav aria-label="supplementary navigation" className={styles.container}>
        {children}
      </nav>
      <hr className={styles.hr} />
    </>
  );
}
