import tw from '@/styles';

const styles = tw({
  toggle: `
    base:hidden
  `,
  canvas: (isOpen: boolean) => tw(`
    fixed ${isOpen ? 'right-0' : '-right-full'} top-0 z-10
    w-full h-full
    bg-white dark:bg-black

    base:hidden
  `),
  wrapper: `
    flex flex-col justify-between
    h-full
  `,
  heading: `
    pl-4 pt-4
    text-4xl/8
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase

    pico:text-5xl/9
    nano:text-6xl/11.5
    milli:text-7xl/13.75
    deci:text-8xl/18.5
  `,
  close: `
    absolute top-3 right-3
  `,
  icon: `
    w-8.25 h-8.25
    stroke-1 stroke-current/90
  `,
  theme: `
    absolute top-4 right-14 z-10
  `,
  sun: `
    w-6 h-6
    stroke-2 stroke-current/90

    light:hidden
  `,
  moon: `
    w-6 h-6
    stroke-2 stroke-current/90

    dark:hidden
  `,
  list: `
    flex flex-col
    w-full
    pl-4 pb-4
  `,
  item: `
    mb-0
  `,
  link: `
    text-5xl/9
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase

    pico:text-6xl/11.5
    nano:text-7xl/12
    milli:text-8xl/18.5
    deci:text-9xl/24.5
  `,
});

export default styles;
