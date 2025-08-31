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
        pt-20

        base:pt-6
        deka:px-12
        deka:py-12
      `);
    }

    return tw(`
      ${common}
      pt-20

      hecto:pt-6
      giga:px-12
      giga:py-12
    `);
  },
});

export default styles;
