import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => tw(`
    group/container
    z-2
    ${align === 'end' && 'flex flex-col justify-end'}
    py-6 pl-6
    scroll-smooth
    duration-300

    md:overflow-y-scroll
    ml:pl-26

    ${isOnChild ? `
      hidden
      absolute top-0 bottom-0 right-0 left-0

      ${align === 'end' ? 'ml:flex' : 'ml:block'}
      ml:left-28
      lg:left-38
      sl:py-12
      sl:left-54
    ` : `
      relative
      h-full

      md:pl-0
      md:absolute
      md:bottom-0
      md:right-0
      md:top-0
      md:left-60
      ml:left-68
      ml:py-12
      sl:left-100
    `}
  `),
  list: (align: 'end' | 'start') => tw(`
    group/list

    ${align === 'start' ? `
      flex flex-col justify-end gap-2
    ` : `
    `}
  `),
  item: `
    overflow-hidden
    mb-1
    opacity-0
    animate-elastic-in-from-right
  `,
  link: (isOnChild: boolean, isActive: boolean) => {
    if (isOnChild) {
      return tw(`
        text-7xl/14
        font-stretch-ultra-condensed
        uppercase
        duration-300

        ${isActive ? `
          text-white/90
          font-medium
          tracking-tighter
        ` : `
          text-white/25
          font-thin

          hover:tracking-tighter
          hover:text-white/90
          hover:font-medium
        `}

        sx:text-8xl/18
      `);
    }

    return tw(`
      text-4xl/8 text-white
      font-black font-stretch-condensed
      uppercase
      tracking-tighter

      5xs:text-5xl/10
      4xs:text-6xl/12
      2xs:text-7xl/14
      sm:text-8xl/19
      md:text-7xl/14
      md:font-stretch-semi-condensed
      md:duration-300
      md:hover:font-extralight
      md:hover:text-white
      md:group-hover/list:text-white/25
      md:tracking-tight
      lg:text-8xl/19
      2sx:text-9xl/25
    `);
  },
  block: (isExternal: boolean) => tw(`
    block

    ${isExternal && `
      last:after:content-['_↗']
      last:after:font-thin
    `}
  `),
});

export default styles;
