import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      top-0 left-0 bottom-0 z-1
      flex flex-col items-start justify-end
      p-6

      md:z-3
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        h-full

        ml:pl-20
        ml:py-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        relative

        md:absolute
        ml:pl-20
        ml:py-12
      `);
    }

    return tw(`
      ${common}

      relative

      md:px-6
      md:py-6
      ml:absolute
      sl:pl-20
      sl:py-12
    `);
  },
  logo: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      group/logo
      flex items-center
    `;

    if (isOnRoot) {
      return tw(`
        ${common}
        block
        absolute top-6 left-6

        ml:top-12
        ml:left-20
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}
        relative

        md:absolute
        md:top-6
        md:left-6
        ml:top-12
        ml:left-20
      `);
    }

    return tw(`
      ${common}
      relative

      ml:absolute
      ml:top-6
      ml:left-6
      sl:top-12
      sl:left-20
    `);
  },
  square: `
    relative
    flex flex-col items-center justify-center
    mr-1
    bg-white
    h-3 w-3
    mr-0.75
    rounded-xs
  `,
  o: `
    h-2.5 w-2.5
    bg-black
    rounded-full
  `,
  username: (isOnRoot: boolean) => tw(`
    flex items-center
    text-base
    font-black
    uppercase
    duration-300

    ${isOnRoot ? 'opacity-100' : 'opacity-0'}
  `),
  over: `
    block
    w-0
    duration-500
    overflow-hidden
    text-black

    group-hover/logo:w-12
    group-hover/logo:text-white
  `,
  nav: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        flex flex-col
        pb-6

        ml:pb-0
      `);
    }

    if (isOnParent) {
      return tw(`
        hidden
        flex flex-col
        pb-6

        ml:pb-0
        md:block
      `);
    }

    return tw(`
      hidden

      ml:block
    `);
  },
  item: `
    opacity-0
    animate-elastic-in-from-left

    md:animate-elastic-in-from-right
  `,
  link: (
    isOnRoot: boolean,
    isOnParent: boolean,
    isActive: boolean,
  ) => {
    const root = `
      relative
      inline-block
      uppercase
      duration-200
      overflow-hidden
    `;

    if (isOnRoot) {
      return tw(`
        ${root}

        h-6
        text-3xl/5 text-white/90
        font-black
        mb-1

        5xs:h-9
        5xs:text-5xl/9
        5xs:font-stretch-semi-condensed
        4xs:h-11
        4xs:text-6xl/10
        3xs:h-14
        3xs:text-7xl/14
        sm:h-18
        sm:text-8xl/17
        md:pe-20
        2xl:h-26
        2xl:text-9xl/26

        hover:font-extralight
        hover:tracking-wide
      `);
    }

    const sub = `
      ${isActive ? 'text-white/90' : 'text-white/25'}
      font-thin font-stretch-ultra-condensed

      hover:text-white/90
    `;

    if (isOnParent) {
      return tw(`
        ${root}
        ${sub}

        text-5xl/9
        h-9

        ml:text-6xl/10
        ml:h-11
        sl:text-8xl/18
        sl:h-19
      `);
    }

    return tw(`
      ${root}
      ${sub}

      text-4xl/6
      h-7

      lg:text-5xl/9
      lg:h-9
    `);
  },
  index: `
    ms-1
    w-8
    text-sm text-yellow-300/90
    font-light
    tracking-normal

    3xs:text-lg
    sm:text-xl
  `,
});

export default styles;
