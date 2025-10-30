import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
};

export default function Article({ children, className, id }: Props) {
  return (
    <article className={`${styles.container} ${className}`.trim()} id={id}>
      {children}
    </article>
  );
}
