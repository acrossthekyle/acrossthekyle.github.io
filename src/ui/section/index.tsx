import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  isFull?: boolean;
};

export default function Section({ children, className = '', isFull }: Props) {
  return (
    <section className={`${styles.container(isFull)} ${className}`.trim()}>
      {children}
    </section>
  );
}
