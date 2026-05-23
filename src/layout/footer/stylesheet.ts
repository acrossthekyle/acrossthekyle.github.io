import tw from '@/styles';

const styles = tw({
  container: `
    h-10 w-full

    flex flex-row items-center justify-between

    lg:fixed
    lg:right-0
    lg:top-0
    lg:z-10
    lg:h-screen
    lg:w-10
    lg:flex-col
  `,
  notice: `
    mr-4
    text-xtiny text-right
    font-normal
    uppercase
    tracking-widest

    md:font-extralight
    lg:fixed
    lg:right-0
    lg:bottom-4
    lg:-translate-x-6.5
    lg:w-64
    lg:origin-bottom-right
    lg:rotate-90
    lg:mr-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  toggle: (theme: string) => tw(`
    relative
    rounded-full
    border border-current/30
    w-3.5 h-3.5
    ml-4
    overflow-hidden

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed

    ${theme === 'system' && `
      bg-(--foreground)
    `}
    ${theme === 'dark' && `
      before:absolute
      before:inset-x-0
      before:-bottom-px
      before:h-1/2
      before:bg-white
    `}
    ${theme === 'light' && 'bg-(--foreground)'}

    lg:mt-4
    lg:ml-0
  `),
});

export default styles;
