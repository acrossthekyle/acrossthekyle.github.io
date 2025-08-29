import styles from './stylesheet';

type Props = {
  skeletons?: number;
};

export default function DirectoryLoading({ skeletons = 13 }: Props) {
  return (
    <>
      {Array.from({ length: skeletons }).map((_, index) => (
        <li className={styles.loading} key={index} />
      ))}
    </>
  );
}
