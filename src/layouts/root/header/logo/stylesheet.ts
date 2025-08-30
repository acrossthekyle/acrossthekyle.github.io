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

        deka:left-12
        deka:top-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        right-6
        left-auto

        base:right-auto
        base:left-6
        deka:left-12
        deka:top-12
      `);
    }

    return tw(`
      ${common}

      right-6
      left-auto

      hecto:right-auto
      hecto:left-6
      giga:left-12
      giga:top-12
    `);
  },
};

export default styles;
