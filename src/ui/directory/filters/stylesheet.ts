import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    ${isOnChild && `
      w-66

      sx:w-84
    `}

    animate-elastic-in-from-right
  `),
  options: `
    mb-6
  `,
  option: `
    inline-block
    pr-1
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
  `,
});

export default styles;
