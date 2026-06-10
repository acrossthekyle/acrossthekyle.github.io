import tw from '@/styles';

const styles = tw({
  container: `
    absolute
    w-full max-w-full
    h-full max-h-full
    bg-transparent
    outline-none
    overflow-hidden
    duration-450

    backdrop:absolute
    backdrop:outline-none
    backdrop:bg-transparent

    motion-safe:backdrop:opacity-0
    motion-safe:backdrop:transition-opacity
    motion-safe:backdrop:duration-450

    lg:fixed
  `,
  inner: `
    relative
    h-svh w-full
    pointer-events-none
    overflow-x-hidden
    overflow-y-scroll
    scroll-smooth
  `,
  close: (isMenuOpen: boolean) => tw(`
    absolute top-0 right-0 z-2
    grid justify-items-center gap-1.5
    w-16

    ${isMenuOpen ? `
      h-16
      p-3
    ` : `
      h-10
      p-4
    `}

    sm:right-auto
    sm:left-0

    motion-safe:duration-450
    motion-safe:linear
  `),
  top: (isMenuOpen: boolean) => tw(`
    h-px w-8
    bg-(--foreground)
    transition-transform duration-450 ease-in-out

    ${isMenuOpen ? 'translate-y-4.5 rotate-45' : ''}
  `),
  bottom: (isMenuOpen: boolean) => tw(`
    h-px w-8
    bg-(--foreground)
    transition-transform duration-450 ease-in-out

    ${isMenuOpen ? '-translate-y-1.25 -rotate-45' : ''}
  `),
});

export default styles;
