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
  close: `
    hidden
    relative z-1
    w-full
    mt-1
    flex justify-center
    pointer-events-none

    md:absolute
    md:top-5
    md:left-0
    md:mt-0
  `,
  button: `
    flex items-center gap-2
    w-12
    p-2
    rounded-md
    font-sans font-medium
    text-xs text-(--foreground)
    capitalize
    rounded-sm
    pointer-events-auto

    md:w-18

    md:motion-safe:opacity-50
    md:motion-safe:duration-300
    md:motion-safe:hover:opacity-100
  `,
  icon: `
    hidden
    w-3 h-3

    md:block
  `,
});

export default styles;
