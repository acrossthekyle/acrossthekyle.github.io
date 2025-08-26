import tw from '@/styles';

const styles = tw({
  link: (isOnChild: boolean, isActive: boolean) => {
    const root = `
      group/link

      uppercase
      duration-200
      overflow-hidden
    `;

    if (isOnChild) {
      const sub = `
        text-7xl/14
        font-stretch-ultra-condensed

        sx:text-8xl/18
        3xl:text-9xl/26
        3xl:font-stretch-extra-condensed
      `;

      if (isActive) {
        return tw(`
          ${root}
          ${sub}

          text-white/90
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

      text-4xl/7 text-white/90
      font-black font-stretch-extra-condensed
      tracking-tighter

      5xs:text-5xl/10
      4xs:text-6xl/12
      2xs:font-stretch-semi-condensed
      sm:text-8xl/18
      md:text-7xl/14
      md:font-stretch-normal
      md:tracking-tight
      lg:text-8xl/18
      3xl:text-9xl/26

      hover:font-extralight
      hover:text-white/90
      group-hover/list:text-white/25
    `);
  },
});

export default styles;
