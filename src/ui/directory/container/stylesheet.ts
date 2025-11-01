import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      flex-1
      ${align === 'end' && 'flex flex-col'}
      px-4 py-4
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

        ${align === 'end' ? 'base:flex' : 'base:block'}
        base:w-55
        base:px-4
        deka:px-1
        deka:py-12
        hecto:w-60
        kilo:w-70
        mega:w-90
      `);
    }

    return tw(`
      ${common}

      w-full
      mt-12

      base:mt-0
      base:pt-6
      base:pl-12
      deka:pr-12
      deka:py-12
    `);
  },
});

export default styles;
