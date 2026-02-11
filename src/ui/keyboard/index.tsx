import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  isSymbol?: boolean;
};

export default function Keyboard({ children, isSymbol }: Props) {
  return (
    <kbd className={styles.container(isSymbol)}>{children}</kbd>
  );
}
