import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    absolute top-4 right-14

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `hidden base:block`}

    base:right-4
    deka:top-12
    deka:right-12
  `),
  sun: `
    w-6 h-6

    base:w-7
    base:h-7

    light:hidden
  `,
  moon: `
    w-6 h-6

    base:w-7
    base:h-7

    dark:hidden
  `,
});

export default styles;
