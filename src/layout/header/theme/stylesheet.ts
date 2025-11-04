import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean) => {
    const common = `
      absolute
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        top-4 right-4

        deka:top-12
        deka:right-12
      `);
    }

    return tw(`
      ${common}

      top-4 right-4

      deka:top-12
      deka:right-12
    `);
  },
  sun: `
    w-6 h-6

    base:w-7
    base:h-7

    light:hidden
  `,
  moon: `
    w-6 h-6

    base:w-7
    base:h-7

    dark:hidden
  `,
});

export default styles;
