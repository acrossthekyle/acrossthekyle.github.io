import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Caption({ children, className = '' }: Props) {
  return (
    <figcaption className={`${styles.container} ${className}`.trim()}>
      {children}
    </figcaption>
  );
}
