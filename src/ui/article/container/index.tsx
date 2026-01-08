import styles from './stylesheet';

type Props = {
  ariaLabelledBy?: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  hasBorder?: boolean;
};

export default function Article({
  ariaLabelledBy,
  children,
  className,
  hasBorder,
}: Props) {
  return (
    <article
      aria-labelledby={ariaLabelledBy}
      className={`${styles.container(hasBorder)} ${className || ''}`.trim()}
    >
      {children}
    </article>
  );
}
