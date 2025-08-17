import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      relative z-2
      ${align === 'end' && 'flex flex-col justify-end'}
      py-6 pl-6
      scroll-smooth
      duration-300

      md:absolute
      md:bottom-0
      md:right-0
      md:top-0
      md:left-42
      md:overflow-y-scroll
      md:pl-10
    `;

    if (isOnChild) {
      return tw(`
        ${common}

        hidden

        ${align === 'end' ? 'ml:flex' : 'ml:block'}
        ml:left-34
        lg:left-42
        sl:py-12
        sl:pl-14
        sl:left-56
      `);
    }

    return tw(`
      ${common}

      h-full

      ml:left-62
      ml:py-12
      ml:pl-14
      sl:left-80
    `);
  },
  list: (align: 'end' | 'start') => tw(`
    group/list
    flex flex-col gap-4
    lg:gap-2

    ${align === 'start' && `
      justify-end
    `}
  `),
  item: `
    flex flex-col
    opacity-0
    animate-elastic-in-from-right
  `,
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      block
      uppercase
      duration-300
      overflow-hidden
    `;

    if (isOnChild) {
      const sub = `
        text-7xl/14
        font-stretch-ultra-condensed

        sx:text-8xl/18
      `;

      if (isActive) {
        return tw(`
          ${root}
          ${sub}

          text-white/90
          font-medium
          tracking-tighter
        `);
      }

      return tw(`
        ${root}
        ${sub}

        text-white/25
        font-thin

        hover:tracking-tighter
        hover:text-white/90
        hover:font-medium
      `);
    }

    return tw(`
      ${root}

      text-4xl/8 text-white/90
      font-bold font-stretch-condensed
      tracking-tighter

      5xs:text-5xl/10
      4xs:text-6xl/12
      2xs:text-7xl/14
      2xs:font-stretch-semi-condensed
      sm:text-8xl/18
      md:text-7xl/14
      md:font-stretch-normal
      md:tracking-tight
      lg:text-8xl/18
      2xl:text-9xl/26

      hover:font-extralight
      hover:text-white/90
      group-hover/list:text-white/25
    `);
  },
  block: (isExternal: boolean) => tw(`
    block

    ${isExternal && `
      last:after:content-['↗']
      last:after:font-normal
      last:after:text-xl
      last:after:text-yellow-300/90
    `}
  `),
  index: `
    inline-block
    mx-2
    text-sm text-yellow-300/90
    font-light font-stretch-condensed
    tracking-normal

    3xs:text-lg
    sm:text-xl/5
  `,
  meta: (isOnChild: boolean, isActive: boolean) => tw(`
    relative top-0
    flex gap-2
    text-sm/3 text-white/90
    font-light font-stretch-condensed
    tracking-normal
    duration-300
    mb-1

    ${isActive ? 'lg:!text-white/90' : 'lg:text-white/25'}

    group-hover/link:!text-white/90
    group-hover/list:text-white/25

    lg:text-lg/4
    lg:ms-0
    lg:text-right
    lg:opacity-0
    lg:absolute
    lg:top-0
    lg:right-12
    lg:flex-col
    lg:gap-0
    ${!isOnChild && 'lg:group-hover/link:opacity-100'}
  `),
  text: `
    inline-block

    lg:block
  `,
  slash: `
    w-3 h-3
    stroke-1

    lg:hidden
  `,
});

export default styles;
