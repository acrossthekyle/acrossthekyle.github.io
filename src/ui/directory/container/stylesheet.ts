import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean, align: 'end' | 'start') => {
    const common = `
      relative z-2
      ${align === 'end' && 'flex flex-col justify-end'}
      py-6 pl-6
      scroll-smooth
      duration-300

      md:absolute
      md:bottom-0
      md:right-0
      md:top-0
      md:left-42
      md:overflow-y-scroll
      md:pl-10
    `;

    if (isOnChild) {
      return tw(`
        ${common}

        hidden

        ${align === 'end' ? 'ml:flex' : 'ml:block'}
        ml:left-34
        lg:left-42
        sl:py-12
        sl:pl-14
        sl:left-56
        3xl:pl-30
        3xl:left-60
        4xl:left-100
      `);
    }

    return tw(`
      ${common}

      ml:left-62
      ml:py-12
      ml:pl-14
      sl:left-80
      3xl:pl-30
      3xl:left-94
      4xl:left-100
    `);
  },
});

export default styles;
