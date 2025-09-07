import tw from '@/styles';

const styles = {
  item: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      opacity-0
      animate-elastic-in-from-left
      duration-200

      base:animate-elastic-in-from-right
    `;

    if (isOnRoot) {
      return tw(`
        ${common}
        h-10

        pico:h-12
        milli:h-14
        deci:h-18
        tera:h-26
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}
        h-9

        deka:h-11
        mega:h-18
        tera:h-26
      `);
    }

    return tw(`
      ${common}
      h-7

      base:h-9
      tera:h-14
      peta:h-26
    `);
  },
};

export default styles;
