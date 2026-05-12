import tw from '@/styles';

const styles = tw({
  menu: `
    fixed top-3 right-3 z-99

    flex items-center gap-1

    p-1.5

    rounded-sm
    bg-(--foreground)
    text-(--background)

    font-normal
    text-sm

    sm:hidden
  `,
  container: `
    hidden
    fixed top-2 left-1/2 z-99
    -translate-x-1/2
    flex-row items-start gap-2
    w-auto
    rounded-sm
    bg-(--background)
    pointer-events-auto

    motion-safe:duration-300
    motion-safe:ease-in-out

    sm:flex
  `,
  icon: `
    w-4.25 h-4.25
  `,
});

export default styles;
