import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean) => {
    const common = `
      flex items-end justify-end

      deka:px-12
      deka:py-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col

        px-2.5
        py-3
      `);
    }

    return tw(`
      ${common}

      flex-row

      base:w-auto
      base:h-full
      base:relative
      base:flex-col
    `);
  },
});

export default styles;
