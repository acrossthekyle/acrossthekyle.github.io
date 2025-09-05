import tw from '@/styles';

const styles = tw({
  close: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      block
      absolute left-3 top-3
      font-bold font-stretch-ultra-condensed
      text-lg
    `;

    if (isOnRoot) {
      return tw(`
        hidden
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        base:hidden
      `);
    }

    return tw(`
      ${common}

      base:hidden
    `);
  },
});

export default styles;
