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
    `;

    if (isOnRoot) {
      return tw(`
        ${root}

        h-10
        text-5xl/10
        font-black font-stretch-extra-condensed
        tracking-tighter

        pico:h-12
        pico:text-6xl/12
        nano:h-14
        nano:text-7xl/14
        milli:font-stretch-semi-condensed
        deci:h-18
        deci:text-8xl/17
        base:pe-12
        base:font-stretch-normal
        base:tracking-tight
        tera:h-26
        tera:text-9xl/26

        hover:font-extralight
        hover:tracking-wide
      `);
    }

    const sub = `
      ${isActive ? '' : 'text-white/25'}
      font-thin font-stretch-ultra-condensed

      hover:text-white/90
    `;

    if (isOnParent) {
      return tw(`
        ${root}
        ${sub}

        text-5xl/9
        h-9

        deka:h-11
        deka:text-6xl/10
        mega:h-18
        mega:text-8xl/17
        tera:h-26
        tera:text-9xl/26
      `);
    }

    return tw(`
      ${root}
      ${sub}

      h-7
      text-4xl/6

      base:h-9
      base:text-5xl/8
      tera:h-14
      tera:text-7xl/14
      peta:h-26
      peta:text-9xl/26
    `);
  },
});

export default styles;
