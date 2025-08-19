import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      relative top-0 z-3
      scroll-smooth
      p-6
      outline-0
      opacity-0
      animate-in

      ml:left-110
      lg:left-120
      sl:left-136
      sx:left-156
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
      sl:pr-20
      sl:py-12
    `);
  },
});

export default styles;
