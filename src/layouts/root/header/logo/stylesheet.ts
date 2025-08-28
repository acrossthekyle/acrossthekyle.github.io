import tw from '@/styles';

const styles = {
  logo: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      absolute top-6
      text-xl
      font-black font-stretch-condensed
      uppercase
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        left-6

        ml:left-20
        ml:top-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        right-6
        left-auto

        md:right-auto
        md:left-6
        ml:left-20
        ml:top-12
      `);
    }

    return tw(`
      ${common}

      right-6
      left-auto

      lg:right-auto
      lg:left-6
      xl:left-20
      xl:top-12
    `);
  },
};

export default styles;
