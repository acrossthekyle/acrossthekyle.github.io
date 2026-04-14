import styles from './stylesheet';

type Props = {
  className?: string;
};

export default function Content({
  children,
  className = '',
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}
