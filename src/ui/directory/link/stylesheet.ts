import tw from '@/styles';

const styles = tw({
  link: (
    isOnChild: boolean,
    isActive: boolean,
    isInView: boolean,
    lines: number,
  ) => {
    const root = `
      group/link

      uppercase
      transform-gpu duration-300
      overflow-hidden
      outline-0

      base:duration-200
    `;

    if (isOnChild) {
      const sub = `
        ${lines === 1 && `
          h-11

          deka:h-13
          mega:h-17.5
        `}

        ${lines === 2 && `
          h-22

          deka:h-26
          mega:h-35
        `}

        ${lines === 3 && `
          h-33

          deka:h-39
          mega:h-52.5
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

      text-5xl/9
      font-black font-stretch-extra-condensed
      tracking-tighter

      pico:text-6xl/11
      milli:text-7xl/13
      milli:font-stretch-semi-condensed
      deci:text-8xl/17.5
      base:text-7xl/13.5
      base:font-stretch-normal
      base:tracking-tight
      hecto:text-8xl/18
      tera:text-9xl/26

      hover:font-extralight
      hover:text-white/90
      group-hover/list:text-white/25

      ${!isInView && 'font-extralight text-white/40 base:font-black base:text-white/90'}
    `);
  },
});

export default styles;
