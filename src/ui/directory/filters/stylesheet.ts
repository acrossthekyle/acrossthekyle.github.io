import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    ${isOnChild ? 'hidden' : 'block'}

    animate-elastic-in-from-right
  `),
  options: `
    mb-6

    ml:flex
    ml:flex-row
    ml:items-center
    ml:gap-1
  `,
  option: `
    inline-block
    pr-1

    ml:flex
    ml:items-center
    ml:pr-0
  `,
  filter: (isActive: boolean) => tw(`
    inline-block
    text-tiny ${isActive ? 'text-yellow-300/90' : 'text-white/90'}
    font-medium
    uppercase
    overflow-hidden
    duration-300
    pt-1

    hover:text-white/50

    ml:py-1
    ml:flex
    ml:justify-start
    ml:pe-1
    lg:text-xs
  `),
  count: `
    inline-block
    ml-1
    text-yellow-300/90
    font-light font-mono
  `,
  slash: `
    inline-block
    -mt-2 ml-1
    w-3 h-3
    stroke-2
    stroke-white/90

    ml:ml-0
    ml:mt-0
  `,
});

export default styles;
