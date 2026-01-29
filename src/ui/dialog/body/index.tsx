import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Body({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
