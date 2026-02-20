import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  shrink?: boolean;
};

export default function Date({ children, shrink }: Props) {
  return (
    <span className={styles.container(shrink)}>
      {children}
    </span>
  );
}
