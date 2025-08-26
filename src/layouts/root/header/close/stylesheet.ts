import tw from '@/styles';

const styles = tw({
  close: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      block
      absolute left-6 top-6
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

        md:hidden
      `);
    }

    return tw(`
      ${common}

      lg:hidden
    `);
  },
});

export default styles;
