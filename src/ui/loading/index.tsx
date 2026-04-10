import { Content } from '@/layout';

import styles from './stylesheet';

export default function Loading() {
  return (
    <Content>
      <div aria-live="assertive" aria-busy="true" className={styles.container}>
        <span className={styles.sr}>Loading, please wait</span>
        <svg
          aria-hidden="true"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className={styles.circle}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className={styles.path}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <div className={styles.progress} role="presentation">
          [{' '}
          <span className={styles.bar}>
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </span>
          <span className={styles.cap}>]</span>
        </div>
        <div className={styles.meta} role="presentation">
          <div className={styles.col}>
            <span>[ Version: 1701.D/48632.4 ]</span>
          </div>
          <div className={styles.col}>
            <span>[ S-117 ]</span>
          </div>
        </div>
        <p className={styles.location}>
          41.8781° N, 87.6298° W<br />
          Sol, Orion Spur, Milky Way<br />
          CT -5 GMT
        </p>
      </div>
    </Content>
  );
}
