import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean, isOnChild: boolean) => tw(`
    top-0 left-0 bottom-0 z-1
    flex flex-col items-start justify-between
    p-6

    md:z-3

    ${isOnRoot && `
      h-full
    `}

    ${isOnParent && `
      relative

      md:absolute
    `}

    ${(isOnRoot || isOnParent) && `
      ml:pl-20
      ml:py-12
    `}

    ${isOnChild && `
      relative

      ml:absolute

      md:px-6
      md:py-6
      sl:pl-20
      sl:py-12
    `}
  `),
  anchor: `
    font-black
    uppercase

    focus:outline-0
    focus:ring-1
    focus:ring-white
  `,
  home: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw('text-xl text-white block');
    }

    if (isOnParent) {
      return tw('text-xl text-white hidden md:block');
    }

    return tw(`
      text-xl text-white
      hidden

      ml:block
    `);
  },
  back: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      text-sm text-black
      bg-white
      rounded-full
      py-1 px-4
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
  star: `
    h-6 w-6
    stroke-2
    fill-white
    duration-300

    hover:rotate-72
  `,
  nav: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        flex flex-col
      `);
    }

    if (isOnParent) {
      return tw(`
        flex flex-col

        hidden

        md:block
      `);
    }

    return tw(`
      hidden

      ml:block
    `);
  },
  item: `
    overflow-hidden
    opacity-0
    animate-elastic-in-from-left

    md:animate-elastic-in-from-right
  `,
  link: (
    isOnRoot: boolean,
    isOnParent: boolean,
    isOnChild: boolean,
    isActive: boolean,
  ) => {
    const common = `
      outline-0

      focus:text-white
    `;

    if (isOnRoot) {
      return tw(`
        relative
        inline-block
        text-3xl/5 text-white
        font-black
        uppercase
        duration-200
        overflow-hidden

        5xs:text-5xl/10
        5xs:font-stretch-condensed
        3xs:tracking-normal
        3xs:text-5xl/10
        2xs:text-6xl/12
        md:font-stretch-normal
        md:h-21
        md:text-8xl/20
        md:pe-20
        2xl:h-26
        2xl:text-9xl/26

        hover:font-light
        hover:tracking-wider

        ${common}
        focus:font-light
        focus:tracking-wider
      `);
    }

    if (isOnParent) {
      return tw(`
        text-5xl/10 ${isActive ? 'text-white' : 'text-white/25'}
        font-thin font-stretch-ultra-condensed
        uppercase
        duration-200

        md:hover:text-white
        ml:text-6xl/12
        sl:text-8xl/18

        ${common}
      `);
    }

    return tw(`
      text-4xl/7 ${isActive ? 'text-white' : 'text-white/25'}
      font-thin font-stretch-ultra-condensed
      uppercase
      duration-200

      md:hover:text-white
      lg:text-5xl/10

      ${common}
    `);
  },
  index: `
    ms-2
    w-8
    text-xl
    font-light
    tracking-normal
  `,
});

export default styles;
