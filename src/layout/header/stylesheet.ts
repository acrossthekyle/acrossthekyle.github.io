import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean) => {
    const common = `
      flex items-end justify-end

      deka:p-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col

        p-6
      `);
    }

    return tw(`
      ${common}

      flex-row

      base:p-3
      base:w-auto
      base:h-full
      base:relative
      base:flex-col
    `);
  },
});

export default styles;
