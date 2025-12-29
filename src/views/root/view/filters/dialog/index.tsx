import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onChoose: (value: string) => void;
  onClose: () => void;
};

export default function Dialog({
  isActive,
  onChoose,
  onClose,
}: Props) {
  return (
    <dialog
      aria-label="filter wanderings"
      aria-modal="true"
      className={styles.dialog(isActive)}
      id="filtering"
      open={isActive}
      role="dialog"
      tabIndex={-1}
    >
      <FocusLock className={styles.lock} disabled={!isActive}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Filter By</h2>
          <button
            aria-controls="filtering"
            aria-label="exit filters"
            onClick={onClose}
            type="button"
          >
            <X className={styles.icon} />
          </button>
        </header>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.cta}
              onClick={() => onChoose('everything')}
              type="button"
            >
              everything
              <span className={styles.count}>20</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('vacations')} type="button">
              vacations
              <span className={styles.count}>9</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('overnight hikes')} type="button">
              overnight hikes
              <span className={styles.count}>1</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('peak bagging')} type="button">
              peak bagging
              <span className={styles.count}>1</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('section hikes')} type="button">
              section hikes
              <span className={styles.count}>1</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('thru-hikes')} type="button">
              thru-hikes
              <span className={styles.count}>8</span>
            </button>
          </li>
        </ul>
      </FocusLock>
    </dialog>
  );
}
