import tw from '@/styles';

const styles = {
  logo: (isOnRoot: boolean) => {
    const common = `
      absolute top-3
      flex items-center justify-center
      text-sm text-black
      font-black
      bg-white/90 rounded-full
      w-7 h-7
      duration-300

      hover:bg-white/70

      deka:left-12
      deka:top-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        left-3
      `);
    }

    return tw(`
      ${common}

      left-full
      -ml-10

      base:ml-0
      base:left-3
    `);
  },
};

export default styles;
