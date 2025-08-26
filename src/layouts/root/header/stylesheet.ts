import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      flex items-start justify-end
      px-6 py-6
    `;

    const fixed = `
      fixed z-2
      flex-row
      bg-black
      h-19 w-full
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col

        md:flex-0
        ml:pl-20
        ml:py-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}
        ${fixed}

        md:w-auto
        md:h-full
        md:relative
        md:flex-col
        ml:pl-20
        ml:py-12
      `);
    }

    return tw(`
      ${common}
      ${fixed}

      lg:w-auto
      lg:h-full
      lg:relative
      lg:flex-col
      xl:pl-20
      xl:py-12
    `);
  },
});

export default styles;
