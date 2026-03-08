import styles from './stylesheet';

type Props = {
  id?: string;
  level?: 1 | 2 | 3;
};

export default function Container({
  children,
  id,
  level = 1,
}: React.PropsWithChildren<Props>) {
  if (level === 3) {
    return (
      <h3 className={styles.three} id={id}>
        {children}
      </h3>
    );
  }

  if (level === 2) {
    return (
      <h2 className={styles.two} id={id}>
        {children}
      </h2>
    );
  }

  return (
    <h1 className={styles.one} id={id}>
      {children}
    </h1>
  );
}
