import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export default function Notes({
  children,
  isActive,
  onToggle,
}: React.PropsWithChildren<Props>) {
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      onToggle();
    }
  };

  return (
    <div
      aria-expanded={isActive}
      className={styles.container(isActive)}
      onClick={onToggle}
      onKeyDown={handleOnKeyDown}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
