import tw from '@/styles';

const styles = tw({
  link: (isOnChild: boolean, isActive: boolean, lines: number) => {
    const root = `
      group/link

      block
      uppercase
      transform-gpu duration-300 delay-62
      overflow-hidden
      outline-0

      base:duration-200
      base:delay-0
    `;

    if (isOnChild) {
      const sub = `
        ${lines === 1 && `
          h-11.25

          deka:h-13.25
          mega:h-18
        `}

        ${lines === 2 && `
          h-22.25

          deka:h-26.5
          mega:h-36
        `}

        ${lines === 3 && `
          h-33.25

          deka:h-39.5
          mega:h-53
        `}

        text-6xl/11
        font-stretch-ultra-condensed

        deka:text-7xl/13
        mega:text-8xl/17.5
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
