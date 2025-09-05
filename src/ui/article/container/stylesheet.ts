import tw from '@/styles';

const styles = tw({
  container: (isFull: boolean) => {
    const common = `
      flex-2
      scroll-smooth
      overflow-y-scroll
      py-3 px-3
      outline-0

      ${isFull ? 'animate-article-in-fade' : 'animate-article-in-elastic'}
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

      base:pt-6
      deka:px-12
      deka:py-12
    `);
  },
});

export default styles;
