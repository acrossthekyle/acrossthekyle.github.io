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
    py-4 px-5

    backdrop:bg-(--background)/97.5
    backdrop:outline-none

    motion-safe:duration-550
    motion-safe:opacity-0
    motion-safe:top-20
    motion-safe:backdrop:opacity-0
    motion-safe:backdrop:delay-300
    motion-safe:backdrop:duration-500

    sm:py-10
  `,
});

export default styles;
