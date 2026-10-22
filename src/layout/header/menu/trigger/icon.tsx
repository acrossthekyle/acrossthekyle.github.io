import tw from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Icon({ isActive }: Props) {
  return (
    <span className={styles.container}>
      <span className={`${styles.bar} ${styles.first(isActive)}`} />
      <span className={`${styles.bar} ${styles.middle(isActive)}`} />
      <span className={`${styles.bar} ${styles.last(isActive)}`} />
    </span>
  );
};

const styles = tw({
  container: `
    relative
    w-8 h-8
  `,
  bar: `
    block
    absolute
    h-px
    bg-(--foreground)

    motion-safe:duration-300
  `,
  first: (isActive: boolean) => tw(`
    ${isActive ? 'w-8' : 'w-full'}
    ${isActive ? 'top-1/2 -translate-y-1/2 right-0' : 'top-1.5'}
    ${isActive ? 'rotate-45' : 'rotate-0'}
  `),
  middle: (isActive: boolean) => tw(`
    top-3.5
    w-1/2
    ${isActive ? 'right-full' : 'right-0'}
    ${isActive ? 'opacity-0' : 'opacity-100'}
  `),
  last: (isActive: boolean) => tw(`
    ${isActive ? 'w-8' : 'w-2/3'}
    ${isActive ? 'top-1/2 -translate-y-1/2' : 'top-5.5 right-0'}
    ${isActive ? '-rotate-45' : 'rotate-0'}
  `),
});
