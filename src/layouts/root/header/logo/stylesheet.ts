import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean) => {
    const common = `
      absolute top-3 z-3
      duration-300

      deka:left-12
      deka:top-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        left-3
      `);
    }

    return tw(`
      ${common}

      left-full
      -ml-7.5

      base:ml-0
      base:left-3
    `);
  },
  icon: `
    w-6 h-6

    base:w-8
    base:h-8
  `,
});

export default styles;
