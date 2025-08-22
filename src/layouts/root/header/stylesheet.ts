import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      top-0 left-0 bottom-0 z-1
      p-6 pb-0

      md:z-3
    `;

    if (isOnRoot) {
      return tw(`
        ${common}
        flex flex-col items-start justify-end
        pb-0
        h-full

        ml:pl-20
        ml:py-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}
        relative
        flex flex-row items-center justify-between

        md:absolute
        md:flex-col
        md:items-start
        md:justify-end
        ml:pl-20
        ml:py-12
      `);
    }

    return tw(`
      ${common}
      relative
      flex flex-row items-center justify-between

      md:px-6
      md:py-6
      ml:pb-0
      ml:absolute
      ml:flex-col
      ml:justify-end
      ml:items-start
      sl:pl-20
      sl:py-12
    `);
  },
  anchor: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        block
        absolute top-6

        ml:top-12
      `);
    }

    if (isOnParent) {
      return tw(`
        relative

        md:absolute
        md:top-6
        ml:top-12
      `);
    }

    return tw(`
      relative

      ml:absolute
      ml:top-6
      sl:top-12
    `);
  },
  logo: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        absolute
        left-6

        ml:left-20
      `);
    }

    if (isOnParent) {
      return tw(`
        absolute

        md:left-6
        ml:left-20
      `);
    }

    return tw(`
      absolute

      ml:left-6
      sl:left-20
    `);
  },
  close: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        hidden
      `);
    }

    if (isOnParent) {
      return tw(`
        block

        md:right-6
        md:hidden
        ml:right-20
      `);
    }

    return tw(`
      block

      ml:hidden
      ml:right-6
      sl:right-20
    `);
  },
  star: `
    h-7 w-7
    stroke-0
    fill-white/90
  `,
  x: `
    w-7 h-7
    stroke-2 stroke-white/90
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

        h-10
        text-5xl/9 text-white/90
        font-bold font-stretch-condensed
        tracking-tighter

        5xs:h-12
        5xs:text-6xl/12
        4xs:h-14
        4xs:text-7xl/14
        2xs:font-stretch-semi-condensed
        sm:h-18.5
        sm:text-8xl/18
        md:pe-20
        md:font-stretch-normal
        md:tracking-tight
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
    ml-1
    text-tiny text-yellow-300/90
    font-light
    tracking-normal

    5xs:text-xs
  `,
});

export default styles;
