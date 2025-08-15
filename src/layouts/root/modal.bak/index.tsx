import styles from './stylesheet';

export default function Modal() {
  return (
    <div
      aria-modal="true"
      className={styles.dialog}
      id="modal"
      role="dialog"
      tabIndex={-1}
    />
  );
}
