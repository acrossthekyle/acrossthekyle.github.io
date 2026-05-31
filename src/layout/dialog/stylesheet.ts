import tw from '@/styles';

const styles = tw({
  container: `
    fixed inset-0 z-9999
    w-screen max-w-full
    h-full max-h-full
    bg-transparent
    outline-none
    overflow-hidden
    scroll-smooth
    duration-450

    backdrop:fixed
    backdrop:inset-0
    backdrop:outline-none
    backdrop:bg-(--background)

    lg:motion-safe:backdrop:opacity-0
    lg:motion-safe:backdrop:transition-opacity
    lg:motion-safe:backdrop:duration-550

    lg:cursor-zoom-out
  `,
  inner: (isOpen: boolean, isClosing: boolean) => tw(`
    relative
    h-screen
    overflow-x-hidden
    overflow-y-scroll
    scroll-smooth
    pointer-events-none

    motion-safe:duration-500

    ${isClosing && 'top-0 scale-0'}
    ${isOpen ? 'top-0 scale-100' : 'top-0 scale-0'}
  `),
});

export default styles;
