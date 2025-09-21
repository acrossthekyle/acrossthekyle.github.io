import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      flex-1
      ${align === 'end' && 'flex flex-col'}
      px-3 py-3
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

        base:block
        base:w-60
        deka:py-12
        deka:w-70
        mega:w-90
      `);
    }

    return tw(`
      ${common}

      pt-14
      w-full

      base:pt-6
      base:pl-12
      deka:pr-12
      deka:py-12
    `);
  },
});

export default styles;
