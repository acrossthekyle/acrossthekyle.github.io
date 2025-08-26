import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isFull?: boolean;
};

export default function Article({ children, isFull }: Props) {
  return (
    <article className={styles.container(isFull)}>
      {children}
    </article>
  );
}
