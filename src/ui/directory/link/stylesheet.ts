import tw from '@/styles';

const styles = tw({
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      block
      uppercase
      duration-200
      overflow-hidden
    `;

    if (isOnChild) {
      const sub = `
        text-5xl/9.25
        font-stretch-ultra-condensed

        hecto:text-6xl/11.5
        kilo:text-7xl/14
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

        text-current/25
        font-thin

        hover:tracking-tighter
        hover:text-current/90
        hover:font-medium
      `);
    }

    return tw(`
      ${root}

      text-5xl/9.25
      font-extrablack font-stretch-extra-condensed
      tracking-tight

      centi:text-7xl/13.75
      centi:font-stretch-semi-condensed
      deci:text-8xl/18.5
      base:text-7xl/14
      base:font-stretch-normal
      base:tracking-tight
      hecto:text-8xl/18.5
      tera:text-9xl/24.75

      hover:font-extralight
      hover:text-current/90
      group-hover/list:text-current/25
    `);
  },
});

export default styles;
