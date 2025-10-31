import tw from '@/styles';

const styles = tw({
  header: (isOnRoot: boolean, isOnGrandChild: boolean) => {
    const common = `
      flex items-start justify-between

      deka:p-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col
        p-4 pr-0

        plank:p-4
      `);
    }

    if (isOnGrandChild) {
      return tw(`
        ${common}
        hidden

        base:flex
        base:flex-col
      `);
    }

    return tw(`
      ${common}

      flex-row justify-start
      p-4 pb-0

      base:w-auto
      base:h-full
      base:relative
      base:flex-col
      base:justify-between
    `);
  },
});

export default styles;
