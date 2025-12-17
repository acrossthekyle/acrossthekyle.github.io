import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean, isMenuActive: boolean) => tw(`
    ${isOnRoot ? 'fixed' : 'absolute'} top-2 ${isOnRoot ? 'right-2' : 'left-2'}
    p-2 pt-1

    text-xs
    font-normal
    uppercase

    ${!isOnRoot && `base:hidden`}
    ${isOnRoot && !isMenuActive && `base:block`}
    base:right-2
    base:left-auto
    deka:p-0
    deka:top-10
    deka:right-11.5
  `),
  sun: `
    px-1
    font-extrablack

    dark:hidden
  `,
  moon: `
    px-1
    font-extrablack

    light:hidden
  `,
});

export default styles;
