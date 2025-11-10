import tw from '@/styles';

const styles = tw({
  search: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    absolute top-2 right-30
    p-2

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `hidden base:block`}

    base:right-14
    deka:top-10
    deka:right-24
  `),
  icon: `
    w-8 h-8

    base:w-7
    base:h-7
  `,
});

export default styles;
