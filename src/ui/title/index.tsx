import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Title({ children, className = '' }: Props) {
  return (
    <h1 className={`${styles.title} ${className}`.trim()}>
      {children}
    </h1>
  );
}
