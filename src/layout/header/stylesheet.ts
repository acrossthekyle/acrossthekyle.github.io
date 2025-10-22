import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean) => {
    const common = `
      flex items-start justify-between
      px-3 py-3

      deka:px-12
      deka:py-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col
      `);
    }

    return tw(`
      ${common}

      flex-row-reverse

      base:w-auto
      base:h-full
      base:relative
      base:flex-col
    `);
  },
});

export default styles;
