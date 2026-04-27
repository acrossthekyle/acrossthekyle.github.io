import { X } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  notes?: string[];
  onToggle: () => void;
};

export default function Notes({
  isActive,
  notes = [],
  onToggle,
}: Props) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <div
      aria-hidden={isActive ? 'false' : 'true'}
      className={styles.container(isActive)}
      role="dialog"
    >
      <button
        aria-label="close notes"
        className={styles.backdrop(isActive)}
        onClick={onToggle}
        type="button"
      />
      <div className={styles.content(isActive)}>
        <h3 className={styles.title}>
          Notes
        </h3>
        <button
          aria-label="close notes"
          className={styles.close}
          onClick={onToggle}
          type="button"
        >
          <X className={styles.icon} />
        </button>
        {notes.map((paragraph) => (
          <p className={styles.paragraph} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
