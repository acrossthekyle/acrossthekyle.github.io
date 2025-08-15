import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  isFull?: boolean;
};

export default function Article({ children, className = '', isFull }: Props) {
  return (
    <article className={`${styles.container(isFull)} ${className}`.trim()}>
      {children}
    </article>
  );
}
