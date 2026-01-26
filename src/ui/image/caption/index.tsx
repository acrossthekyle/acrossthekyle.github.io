import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  invisible?: boolean;
};

export default function Caption({
  children,
  className = '',
  invisible,
}: Props) {
  return (
    <figcaption
      className={`${styles.container(invisible)} ${className}`.trim()}
    >
      {children}
    </figcaption>
  );
}
