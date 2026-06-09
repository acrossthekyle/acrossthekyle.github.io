import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 right-0 z-10
    flex flex-row items-center

    sm:left-0
    sm:right-auto
    lg:fixed

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  anchor: `
    relative
    grid justify-items-center gap-1.5
    w-16 h-10
    p-4
  `,
  top: `
    h-px w-8
    bg-(--foreground)
  `,
  bottom: `
    h-px w-8
    bg-(--foreground)
  `,
});

export default styles;
