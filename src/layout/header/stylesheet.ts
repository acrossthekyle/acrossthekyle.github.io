import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 left-3 z-100
    h-10
    flex flex-row items-center gap-1

    lg:fixed
    lg:left-0
    lg:z-10
    lg:translate-y-33
    lg:translate-x-1.75
    lg:origin-top-left
    lg:-rotate-90

    motion-safe:opacity-0
    motion-safe:animate-fade-in-left-slightly-delayed
  `,
  divider: `
    font-thin
    select-none
    pointer-events-none
  `,
  anchor: (isActive: boolean) => tw(`
    block
    font-black
    ${isActive ? 'opacity-100' : 'opacity-50'}
    uppercase
    text-xs
    tracking-widest

    md:text-tiny
  `),
  prefix: `
    text-xs
    font-thin
  `,
});

export default styles;
