import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean) => {
    const common = `
      absolute top-0 z-3
      py-3 px-2
      duration-300

      deka:left-9
      deka:top-9
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        left-0
      `);
    }

    return tw(`
      ${common}

      left-full
      -ml-10

      base:ml-0
      base:left-0
    `);
  },
  icon: `
    w-6 h-6

    base:w-8
    base:h-8
  `,
});

export default styles;
