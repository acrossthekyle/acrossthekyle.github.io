import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <nav aria-label="supplementary navigation">
      <ol className={styles.container}>
        {children}
      </ol>
    </nav>
  );
}
