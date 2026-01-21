import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Header({ children }: Props) {
  return (
    <header className={styles.container}>
      {children}
    </header>
  );
}
