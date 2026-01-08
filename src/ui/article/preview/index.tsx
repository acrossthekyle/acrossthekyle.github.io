import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Preview({
  children,
  className,
}: Props) {
  return (
    <section
      aria-label="preview"
      className={`${styles.container} ${className || ''}`.trim()}
    >
      {children}
    </section>
  );
}
