import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      flex items-start justify-end
      px-6 py-6
    `;

    const fixed = `
      fixed left-0 right-0 z-2
      flex-row
      bg-black
      h-19 w-full
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col

        deka:px-12
        deka:py-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}
        ${fixed}

        base:w-auto
        base:h-full
        base:relative
        base:flex-col
        deka:px-12
        deka:py-12
      `);
    }

    return tw(`
      ${common}
      ${fixed}

      base:w-auto
      base:h-full
      base:relative
      base:flex-col
      deka:px-12
      deka:py-12
    `);
  },
});

export default styles;
