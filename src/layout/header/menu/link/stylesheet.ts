import tw from '@/styles';

const styles = tw({
  link: (
    isOnRoot: boolean,
    isOnParent: boolean,
    isActive: boolean,
  ) => {
    const root = `
      relative
      block
      overflow-hidden
      uppercase
      duration-200
    `;

    if (isOnRoot) {
      return tw(`
        ${root}

        text-4xl/7
        font-black font-stretch-extra-condensed
        tracking-tight

        plank:text-5xl/9.25
        centi:text-7xl/14
        deci:text-8xl/18.5
        base:font-stretch-normal
        base:tracking-tight
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

        text-5xl/9.25

        deka:text-6xl/11.5
        mega:text-8xl/18.5
        tera:text-9xl/26
      `);
    }

    return tw(`
      ${root}
      ${sub}

      base:text-5xl/9.25
      tera:text-7xl/14
      peta:text-9xl/26
    `);
  },
});

export default styles;
