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

      ml:left-62
      ml:py-12
      ml:pl-14
      sl:left-80
    `);
  },
  title: `
    absolute top-12 left-6
    opacity-0
    animate-in

    md:hidden
  `,
  list: `
    group/list
  `,
  item: `
    mb-4
    opacity-0
    animate-elastic-in-from-right

    last:mb-0
  `,
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      uppercase
      duration-200
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

      text-4xl/7 text-white/90
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
      last:after:font-light
      last:after:text-tiny
      last:after:text-yellow-300/90
      last:after:tracking-normal
      last:after:5xs:text-xs
    `}
  `),
  index: `
    mx-2
    text-tiny text-yellow-300/90
    font-light
    tracking-normal

    5xs:text-xs
  `,
  meta: `
    relative top-0
    flex gap-2
    mb-1
    text-sm/3
    font-light font-stretch-condensed
    tracking-normal
    duration-300
  `,
  text: `
    block
  `,
  slash: `
    w-3 h-3
    stroke-1
  `,
  pulse: (isOnChild: boolean) => tw(`
    h-30
    ${isOnChild ? 'w-70' : 'w-[calc(100%-1.5rem)] ml:w-[calc(100%-5rem)]'}
    bg-neutral-900
    animate-pulse
  `),
});

export default styles;
