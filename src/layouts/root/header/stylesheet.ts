import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      top-0 left-0 bottom-0 z-1
      flex flex-col items-start justify-end
      p-6 pb-0 pt-4

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
  breadcrumbs: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      flex items-center gap-1
    `;

    if (isOnRoot) {
      return 'hidden';
    }

    if (isOnParent) {
      return tw(`
        block
        ${common}

        md:hidden
      `);
    }

    return tw(`
      block
      ${common}

      ml:hidden
    `);
  },
  breadcrumb: `
    py-2
    text-xs $text-white/90
    font-black
    uppercase

    sm:text-sm
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
        5xs:font-stretch-condensed
        4xs:h-11
        4xs:text-6xl/10
        3xs:h-14
        3xs:text-7xl/14
        sm:h-19
        sm:text-8xl/18
        md:pe-20
        2xl:h-26
        2xl:text-9xl/26

        hover:font-light
        hover:tracking-wider
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
