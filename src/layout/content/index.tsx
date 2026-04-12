import styles from './stylesheet';

export default function Content({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container} id="content">
      {children}
    </div>
  );
}
