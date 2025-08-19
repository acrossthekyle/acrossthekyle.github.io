import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    ${isOnChild ? 'hidden' : 'block'}

    animate-elastic-in-from-right
  `),
  options: `
    flex flex-col items-start
    mb-6

    sm:flex-row
    sm:items-center
    ml:gap-1
  `,
  option: `
    flex items-center
    w-full
    pr-6

    sm:pr-0
    sm:w-auto
  `,
  filter: (isActive: boolean) => tw(`
    flex justify-between
    w-full
    text-xs ${isActive ? 'text-yellow-300/90' : 'text-white/90'}
    font-black
    uppercase
    overflow-hidden
    duration-300
    py-1

    hover:text-white/50

    sm:text-xs
    sm:justify-start
    ml:pe-1
    lg:text-sm
  `),
  slash: `
    hidden
    w-3 h-3
    stroke-2

    sm:block
  `,
  count: `
    inline-block
    text-yellow-300/90
    font-light font-mono

    sm:ml-1
    md:ml-0
    ml:ml-1
  `,
});

export default styles;
