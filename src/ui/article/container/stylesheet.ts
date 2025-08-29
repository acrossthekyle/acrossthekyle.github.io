import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      flex-2
      scroll-smooth
      overflow-y-scroll
      py-6 px-6
      outline-0
      animate-elastic-in-from-right
    `;

    if (isFull) {
      return tw(`
        ${common}
        pt-30

        md:pt-6
        ml:px-20
        ml:py-12
      `);
    }

    return tw(`
      ${common}
      pt-30

      lg:pt-6
      xl:px-20
      xl:py-12
    `);
  },
});

export default styles;
