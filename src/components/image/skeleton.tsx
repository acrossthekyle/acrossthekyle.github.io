import styles from '@/styles/components/image/skeleton.module.scss';

function Skeleton() {
  return <div aria-hidden="true" className={styles.skeleton} />;
}

export default Skeleton;
