import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 left-0 z-100
    px-4
    h-10
    flex flex-row items-center

    sm:w-1/2
    lg:fixed
    lg:z-10
    lg:w-10
    lg:translate-y-30
    lg:translate-x-0.25
    lg:origin-top-left
    lg:-rotate-90
    lg:px-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-left-slightly-delayed
  `,
  divider: `
    block mx-2
    font-thin
    select-none
    pointer-events-none

    lg:mr-3
  `,
  anchor: (isActive: boolean) => tw(`
    block
    font-black
    ${isActive ? 'opacity-100' : 'opacity-50'}
    uppercase
    text-tiny
    tracking-widest
  `),
});

export default styles;
