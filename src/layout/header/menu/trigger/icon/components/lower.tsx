import tw, { cs } from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Lower({ isActive }: Props) {
  return (
    <span
      className={
        cs(
          styles.container,
          isActive ? styles.active : styles.inactive,
        )
      }
    />
  );
};

const styles = tw({
  container: `
    block
    absolute
    h-px
    bg-(--foreground)

    motion-safe:duration-300
  `,
  active: `
    top-1/2 -translate-y-1/2
    w-7
    -rotate-45
  `,
  inactive: `
    top-5.5 right-0
    w-1/2
    rotate-0
  `,
});
