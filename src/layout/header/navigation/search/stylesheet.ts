import tw from '@/styles';

const styles = tw({
  search: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    absolute top-4 right-24

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `hidden base:block`}

    base:right-14
    deka:top-12
    deka:right-24
  `),
  icon: `
    w-6 h-6

    base:w-7
    base:h-7
  `,
});

export default styles;
