import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      flex-2
      scroll-smooth
      overflow-y-scroll
      py-6 px-6
      outline-0

      ${isFull ? 'animate-article-in-fade' : 'animate-article-in-elastic'}
    `;

    if (isFull) {
      return tw(`
        ${common}
        pt-25

        base:pt-6
        deka:px-12
        deka:py-12
      `);
    }

    return tw(`
      ${common}
      pt-25

      base:pt-6
      deka:px-12
      deka:py-12
    `);
  },
});

export default styles;
