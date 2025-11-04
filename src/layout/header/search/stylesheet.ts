import tw from '@/styles';

const styles = tw({
  search: (isOnRoot: boolean) => {
    const common = `
      absolute
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        top-4 right-14

        deka:bottom-12
        deka:right-12
        deka:top-auto
      `);
    }

    return tw(`
      ${common}

      top-4 right-4

      deka:right-12
      deka:top-12
    `);
  },
  icon: `
    w-6 h-6

    base:w-7
    base:h-7
  `,
});

export default styles;
