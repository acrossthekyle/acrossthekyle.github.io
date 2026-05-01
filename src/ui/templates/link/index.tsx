import styles from './stylesheet';

type Props = {
  onClick: () => void;
};

export default function Link({
  children,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <button
      aria-label="view album"
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
