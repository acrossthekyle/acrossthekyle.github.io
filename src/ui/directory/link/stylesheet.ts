import tw from '@/styles';

const styles = tw({
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      uppercase
      duration-200
    `;

    if (isOnChild) {
      const sub = `
        text-6xl/11
        font-stretch-ultra-condensed

        base:text-7xl/13
        mega:text-8xl/17.5
        giga:text-8xl/17.5
        tera:font-stretch-extra-condensed
      `;

      if (isActive) {
        return tw(`
          ${root}
          ${sub}

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

      text-5xl/10
      font-black font-stretch-extra-condensed
      tracking-tighter

      pico:text-6xl/12
      milli:text-7xl/14
      milli:font-stretch-semi-condensed
      deci:text-8xl/18
      base:text-7xl/14
      base:font-stretch-normal
      base:tracking-tight
      hecto:text-8xl/18
      tera:text-9xl/26

      hover:font-extralight
      hover:text-white/90
      group-hover/list:text-white/25
    `);
  },
});

export default styles;
