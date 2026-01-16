import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Caption({ children, className = '' }: Props) {
  return (
    <p className={`${styles.caption} ${className}`.trim()}>
      {children}
    </p>
  );
}
