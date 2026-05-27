import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-2 left-0 right-0 bottom-10 z-9999
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
    backdrop:backdrop-blur-xl

    motion-safe:backdrop:opacity-0
    motion-safe:backdrop:transition-opacity
    motion-safe:backdrop:duration-400

    lg:top-0
    lg:bottom-0
    lg:right-0
    lg:left-0
  `,
  inner: (isOpen: boolean, isClosing: boolean) => tw(`
    relative
    h-screen
    overflow-x-hidden
    overflow-y-scroll
    pointer-events-none

    motion-safe:duration-300

    ${isClosing && 'top-100 scale-70'}
    ${!isOpen && 'top-0 scale-70'}
    ${isOpen && 'top-0 scale-100'}
  `),
});

export default styles;
