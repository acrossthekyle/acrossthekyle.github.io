import tw from '@/styles';

const styles = tw({
  container: `
    h-10 w-full

    flex flex-row items-center justify-between

    lg:fixed
    lg:left-0
    lg:bottom-0
    lg:z-10
    lg:h-auto
    lg:w-10
    lg:flex-col-reverse

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  notice: `
    ml-4 mr-4
    text-xtiny text-right
    font-light
    uppercase
    tracking-widest

    lg:translate-x-44.25
    lg:origin-bottom-left
    lg:-rotate-90
    lg:w-82
    lg:ml-0
    lg:mr-0
    lg:mb-4
    lg:text-left
  `,
  toggle: (theme: string) => tw(`
    relative
    rounded-full
    border border-current/30
    w-3.5 h-3.5
    ml-4
    overflow-hidden

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

    lg:w-2.5
    lg:h-2.5
    lg:mb-4.75
    lg:ml-3.25
  `),
  strong: `
    font-black
  `,
});

export default styles;
