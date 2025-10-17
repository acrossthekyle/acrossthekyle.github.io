import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Paragraph({ children }: Props) {
  return (
    <p className={styles.container}>
      {children}
    </p>
  );
}
