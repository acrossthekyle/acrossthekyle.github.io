import tw from '@/styles';

const styles = tw({
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      block
      uppercase
      transform-gpu duration-300 delay-62
      overflow-hidden

      base:duration-200
      base:delay-0
    `;

    if (isOnChild) {
      const sub = `
        text-6xl/11.5
        font-stretch-ultra-condensed

        deka:text-7xl/14
        mega:text-8xl/18.25
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

      text-5xl/9.25
      font-black font-stretch-extra-condensed
      tracking-tight

      pico:text-6xl/11.5
      milli:text-7xl/13.75
      milli:font-stretch-semi-condensed
      deci:text-8xl/18.5
      base:text-7xl/14
      base:font-stretch-normal
      base:tracking-tight
      hecto:text-8xl/18.5
      tera:text-9xl/26

      hover:font-extralight
      hover:text-white/90
      group-hover/list:text-white/25
    `);
  },
});

export default styles;
