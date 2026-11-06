import tw, { cs } from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Middle({ isActive }: Props) {
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
    absolute top-3.5
    w-4/5
    h-px
    bg-(--foreground)

    motion-safe:duration-300
  `,
  active: `
    right-full
    opacity-0
  `,
  inactive: `
    right-0
    opacity-100
  `,
});
