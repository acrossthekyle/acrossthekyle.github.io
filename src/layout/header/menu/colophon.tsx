import tw from '@/styles';

export default function Colophon() {
  return (
    <section className={styles.container}>
      <h3 className={styles.header}>
        <span className={styles.title}>Credit</span>
      </h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <h4 className={styles.heading}>Dev. & Design</h4>
          <p className={styles.content}>Kyle</p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.heading}>Type</h4>
          <p className={styles.content}>Geist</p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.heading}>Images</h4>
          <p className={styles.content}>Via iPhone</p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.heading}>Framework</h4>
          <p className={styles.content}>NextJS</p>
        </li>
      </ul>
    </section>
  );
};

const styles = tw({
  container: `
    flex gap-14
    w-full
    p-6
    mt-12

    sm:mt-30
  `,
  header: `
    flex flex-col gap-1
  `,
  title: `
    uppercase
    tracking-tight
    text-sm
  `,
  items: `
    grid grid-cols-2 gap-x-7 gap-y-6
  `,
  item: `
    flex flex-col gap-0.5
    text-sm
  `,
  heading: `
    font-medium
    text-current/50
  `,
  content: `
    font-normal
  `,
});
