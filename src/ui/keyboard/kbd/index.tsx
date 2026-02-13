import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Keyboard({ children }: Props) {
  return (
    <kbd className={styles.container}>{children}</kbd>
  );
}
