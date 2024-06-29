import styles from '@/styles/ui/skeleton.module.scss';

function Skeleton() {
  return <div aria-hidden="true" className={styles.skeleton} />;
}

export default Skeleton;
