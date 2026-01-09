import tw from '@/styles';

const styles = tw({
  container: `
    border-t-1
    py-8 px-8
    text-xs text-center

    dark:border-t-white/15 light:border-t-black/15

    base:py-12
    base:ml-86
    hecto:ml-106
    kilo:ml-150
    tera:ml-160
    peta:ml-210
    peta:text-xl
  `,
  links: `
    flex justify-center
    mb-4

    base:hidden
  `,
  list: `
    grid grid-cols-2 gap-4

    micro:flex
    micro:flex-row
    micro:gap-4
  `,
  link: `
    underline underline-offset-4
  `,
});

export default styles;
