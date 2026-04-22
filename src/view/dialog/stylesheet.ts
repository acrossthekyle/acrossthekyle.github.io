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
    p-0

    backdrop:bg-(--background)
    backdrop:backdrop-blur-2xl
    backdrop:outline-none

    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:backdrop:opacity-0
    motion-safe:backdrop:duration-300

    md:p-20
  `,
  close: `
    relative z-1
    w-full
    flex justify-center
    pointer-events-none

    md:absolute
    md:top-5
    md:left-0
  `,
  button: `
    flex items-center gap-2
    w-18
    p-2
    rounded-md
    font-sans font-medium
    text-xs text-(--foreground)
    capitalize
    rounded-sm
    pointer-events-auto
  `,
  x: `
    w-3 h-3
  `,
});

export default styles;
