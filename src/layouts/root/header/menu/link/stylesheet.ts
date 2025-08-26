import tw from '@/styles';

const styles = tw({
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
        font-black font-stretch-condensed
        tracking-tighter
        mb-1

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
        3xl:h-26
        3xl:text-9xl/26

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
        3xl:h-26
        3xl:text-9xl/26
      `);
    }

    return tw(`
      ${root}
      ${sub}

      text-4xl/6
      h-7

      lg:text-5xl/9
      lg:h-9
      3xl:h-14
      3xl:text-7xl/14
      4xl:h-26
      4xl:text-9xl/26
    `);
  },
});

export default styles;
