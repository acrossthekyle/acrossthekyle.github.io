import styles from '@/styles/components/loading.module.scss';

type Props = {
  className?: string;
};

function Loading({ className = '' }) {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <div className={styles.loading}>
        <span className={styles.loader} />
        <span className={styles.loader} />
        <span className={styles.loader} />
      </div>
    </div>
  );
}

export default Loading;
