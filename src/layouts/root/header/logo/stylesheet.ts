import tw from '@/styles';

const styles = {
  logo: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      absolute top-6
      flex items-center justify-center
      text-base text-black
      font-black
      bg-white/90 rounded-full
      w-8 h-8
      duration-300

      hover:bg-white/70
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

        left-full
        -ml-13

        base:ml-0
        base:left-6
        deka:left-12
        deka:top-12
      `);
    }

    return tw(`
      ${common}

      left-full
      -ml-13

      hecto:ml-0
      hecto:left-6
      giga:left-12
      giga:top-12
    `);
  },
};

export default styles;
