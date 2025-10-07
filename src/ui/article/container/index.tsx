import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Article({ children, className }: Props) {
  return (
    <article className={`${styles.container} ${className}`.trim()}>
      {children}
    </article>
  );
}
