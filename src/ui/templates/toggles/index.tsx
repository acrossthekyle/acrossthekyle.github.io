import { Maximize, Minimize, Shrink } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onClose: () => void;
  onToggle: () => void;
};

export default function Toggles({ isActive, onClose, onToggle }: Props) {
  return (
    <div className={styles.container}>
      <button
        aria-label="toggle image caption"
        aria-expanded={isActive}
        aria-controls="template-caption"
        className={styles.button}
        onClick={onToggle}
        type="button"
      >
        {isActive ? (
          <Minimize className={styles.icon} />
        ) : (
          <Maximize className={styles.icon} />
        )} Details
      </button>
      <button
        aria-label="close image"
        className={styles.button}
        onClick={onClose}
        type="button"
      >
        <Shrink className={styles.icon} /> Close
      </button>
    </div>
  );
}
