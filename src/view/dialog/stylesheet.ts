import tw from '@/styles';

const styles = tw({
  container: `
    fixed z-9999
    w-full max-w-full
    h-full max-h-full
    bg-transparent
    text-(--foreground)
    outline-none
    overflow-x-visible
    overflow-y-scroll
    scroll-smooth
    cursor-pointer

    backdrop:bg-(--background)
    backdrop:backdrop-blur-2xl
    backdrop:outline-none

    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:backdrop:opacity-0
    motion-safe:backdrop:duration-300
  `,
});

export default styles;
