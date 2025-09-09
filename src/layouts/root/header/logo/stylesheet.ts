import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean) => {
    const common = `
      absolute top-3
      w-7 h-7
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
      -ml-10

      base:ml-0
      base:left-3
    `);
  },
  icon: `
    w-8 h-8
  `,
});

export default styles;
