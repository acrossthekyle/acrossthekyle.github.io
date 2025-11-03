import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnGrandChild: boolean) => {
    const common = `
      flex justify-between

      deka:p-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col items-start
        p-4 pr-0
      `);
    }

    if (isOnGrandChild) {
      return tw(`
        ${common}
        hidden

        base:flex
        base:flex-col
        base:items-start
      `);
    }

    return tw(`
      ${common}

      flex-row items-center justify-start
      p-4 pb-0

      base:pb-4
      base:w-auto
      base:h-full
      base:relative
      base:flex-col
      base:items-start
      base:justify-between
    `);
  },
});

export default styles;
