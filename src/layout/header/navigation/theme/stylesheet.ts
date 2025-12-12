import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    ${isOnRoot ? 'fixed' : 'absolute'} top-2 ${isOnRoot ? 'right-2' : 'left-2'}
    p-2

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `base:block`}
    base:right-2
    base:left-auto
    deka:top-12
    deka:right-11.5
  `),
  sun: `
    w-6 h-6
    stroke-2

    base:w-6
    base:h-6

    dark:hidden
  `,
  moon: `
    w-6 h-6
    stroke-2

    base:w-6
    base:h-6

    light:hidden
  `,
});

export default styles;
