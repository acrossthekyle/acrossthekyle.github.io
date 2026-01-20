import styles from './stylesheet';

type Props = {
  canHover?: boolean;
  children: React.ReactNode | React.ReactNode[];
};

export default function Badge({ canHover, children }: Props) {
  return (
    <span className={styles.container(canHover)}>{children}</span>
  );
}
