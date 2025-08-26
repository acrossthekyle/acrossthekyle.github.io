import tw from '@/styles';

const styles = {
  logo: (isOnRoot: boolean, isOnParent: boolean) => {
    const common = `
      absolute top-6
      text-xl
      font-black font-stretch-condensed
      underline underline-offset-3
      decoration-4 uppercase
      duration-500
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        left-6
        rotate-0

        md:rotate-0
        ml:left-20
        ml:top-12
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        left-1/2
        -ml-1.5 -mt-0.5
        rotate-360

        md:left-6
        md:rotate-0
        md:ml-0
        md:mt-0
        ml:left-20
        ml:top-12
      `);
    }

    return tw(`
      ${common}

      left-full
      -ml-10 -mt-0.5
      rotate-720

      lg:rotate-0
      lg:ml-0
      lg:mt-0
      lg:left-6
      xl:left-20
      xl:top-12
    `);
  },
};

export default styles;
