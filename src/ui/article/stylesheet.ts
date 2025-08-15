import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      relative top-0 z-3
      scroll-smooth
      p-6
      opacity-0
      animate-in

      ml:pr-20
      sl:py-12
      sl:pl-20
    `;

    if (isFull) {
      return tw(`
        ${common}

        ml:pl-20
        md:absolute
        md:right-0
        md:top-0
        md:bottom-0
        md:overflow-y-scroll
        md:left-54
        ml:left-84
        sl:left-90
      `);
    }

    return tw(`
      ${common}

      ml:absolute
      ml:right-0
      ml:top-0
      ml:bottom-0
      ml:overflow-y-scroll
      ml:left-114
      lg:left-124
      sl:left-140
      sx:left-166
    `);
  },
});

export default styles;
