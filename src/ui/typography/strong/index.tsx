import styles from './stylesheet';

type Props = {
  uppercase?: boolean;
};

export default function Strong({
  children,
  uppercase,
}: React.PropsWithChildren<Props>) {
  return (
    <strong className={styles.container(uppercase)}>{children}</strong>
  );
}
