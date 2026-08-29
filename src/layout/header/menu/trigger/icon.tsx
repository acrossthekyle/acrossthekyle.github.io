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
    w-6 h-6
  `,
  bar: `
    block
    absolute
    h-[2px]
    bg-(--foreground)
    rounded-sm

    motion-safe:duration-300

    lg:h-px
  `,
  first: (isActive: boolean) => tw(`
    w-full
    ${isActive ? 'top-3' : 'top-1.5'}
    ${isActive ? 'rotate-45' : 'rotate-0'}
  `),
  middle: (isActive: boolean) => tw(`
    top-3
    w-1/2
    ${isActive ? 'right-full' : 'right-0'}
    ${isActive ? 'opacity-0' : 'opacity-100'}
  `),
  last: (isActive: boolean) => tw(`
    ${isActive ? 'w-full' : 'w-2/3'}
    ${isActive ? 'top-3' : 'top-4.5 right-0'}
    ${isActive ? '-rotate-45' : 'rotate-0'}
  `),
});
