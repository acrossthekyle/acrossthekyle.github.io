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

        lg:block
        sl:pl-10
        sl:pr-6
        xl:py-12
      `);
    }

    return tw(`
      ${common}

      pt-30

      md:pt-6
      md:pl-20
      ml:pr-20
      ml:py-12
    `);
  },
});

export default styles;
