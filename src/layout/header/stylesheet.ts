import tw from '@/styles';

const styles = tw({
  container: `
    h-10 w-full
    flex flex-row items-center justify-between
    border-b-1 border-current/10

    lg:fixed
    lg:left-0
    lg:top-0
    lg:z-10
    lg:w-10
    lg:h-screen
    lg:flex-col
    lg:border-b-0
  `,
  anchor: `
    relative
    grid justify-items-center gap-1.5
    w-8 h-6
    p-2 ml-2

    lg:mt-2
    lg:ml-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  top: (isActive: boolean) => tw(`
    h-px w-4
    bg-(--foreground)
    transition-transform duration-300 ease-in-out

    ${isActive && 'translate-y-1 rotate-45'}
  `),
  bottom: (isActive: boolean) => tw(`
    h-px w-4
    bg-(--foreground)
    transition-transform duration-300 ease-in-out

    ${isActive && '-translate-y-0.75 -rotate-45'}
  `),
  tagline: `
    mr-4
    text-tiny
    font-normal
    uppercase
    tracking-widest

    md:text-xtiny
    md:font-light
    lg:fixed
    lg:left-0
    lg:bottom-4
    lg:translate-x-6.5
    lg:origin-bottom-left
    lg:-rotate-90
    lg:w-64
    lg:mr-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  strong: `
    font-black
  `,
});

export default styles;
