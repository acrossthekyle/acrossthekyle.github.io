import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    absolute top-2 right-16
    p-2

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `hidden base:block`}

    base:right-2
    deka:top-10
    deka:right-10
  `),
  sun: `
    w-8 h-8

    base:w-7
    base:h-7

    light:hidden
  `,
  moon: `
    w-8 h-8

    base:w-7
    base:h-7

    dark:hidden
  `,
});

export default styles;
