import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Figure({ children, className = '' }: Props) {
  return (
    <figure className={`${styles.figure} ${className}`.trim()}>
      {children}
    </figure>
  );
}
