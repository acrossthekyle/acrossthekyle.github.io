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
        p-3 pr-0

        plank:p-6
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
      p-6 pb-0

      base:w-auto
      base:h-full
      base:relative
      base:flex-col
      base:justify-between
    `);
  },
});

export default styles;
