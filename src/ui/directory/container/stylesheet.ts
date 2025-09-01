import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      flex-1
      ${align === 'end' && 'flex flex-col'}
      px-6 py-6
      scroll-smooth
      overflow-y-scroll
      duration-300

      ${align === 'end' && 'justify-end'}

      base:flex-none
    `;

    if (isOnChild) {
      return tw(`
        ${common}
        hidden

        hecto:block
        hecto:w-80
        mega:pl-10
        mega:pr-6
        mega:w-100
        giga:w-100
        giga:py-12
      `);
    }

    return tw(`
      ${common}

      pt-25
      w-full

      base:pt-6
      base:pl-12
      deka:pr-12
      deka:py-12
    `);
  },
});

export default styles;
