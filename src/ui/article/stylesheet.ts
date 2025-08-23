import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      relative top-0 z-3
      scroll-smooth
      p-6
      outline-0
      animate-elastic-in-from-right
    `;

    if (isFull) {
      return tw(`
        ${common}

        md:pl-10
        md:absolute
        md:right-0
        md:top-0
        md:bottom-0
        md:overflow-y-scroll
        md:left-42
        ml:pl-14
        ml:pr-20
        ml:py-12
        ml:left-62
        sl:left-80
        3xl:left-110
        3xl:pl-20
      `);
    }

    return tw(`
      ${common}

      ml:pl-10
      ml:absolute
      ml:right-0
      ml:top-0
      ml:bottom-0
      ml:overflow-y-scroll
      ml:left-110
      lg:left-120
      sl:left-136
      sl:pr-20
      sl:py-12
      sx:left-156
      3xl:left-250
      4xl:left-300
    `);
  },
});

export default styles;
