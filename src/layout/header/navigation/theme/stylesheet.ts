import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    ${isOnRoot ? 'fixed' : 'absolute'} top-2 right-2
    p-2

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `base:block`}

    base:right-2
    deka:top-12
    deka:right-11.5
  `),
  sun: `
    w-8 h-8
    stroke-2

    base:w-7
    base:h-7

    dark:hidden
  `,
  moon: `
    w-8 h-8
    stroke-2

    base:w-7
    base:h-7

    light:hidden
  `,
});

export default styles;
