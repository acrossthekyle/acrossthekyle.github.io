import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      flex-1
      ${align === 'end' && 'flex flex-col'}
      pl-6 py-6 pr-6
      scroll-smooth
      overflow-y-scroll
      duration-300

      ${align === 'end' && 'justify-end'}
    `;

    if (isOnChild) {
      return tw(`
        ${common}
        hidden

        hecto:block
        mega:pl-10
        mega:pr-6
        giga:py-12
      `);
    }

    return tw(`
      ${common}

      pt-30

      base:pt-6
      base:pl-12
      deka:pr-12
      deka:py-12
    `);
  },
});

export default styles;
