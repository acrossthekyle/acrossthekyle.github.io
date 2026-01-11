import tw from '@/styles';

const styles = tw({
  container: `
    border-t-1
    py-6 px-6
    text-xs text-center
    opacity-0
    animate-in-fade

    dark:border-t-white/15 light:border-t-black/15

    base:py-8
    base:ml-86
    hecto:py-12
    hecto:ml-106
    kilo:py-16
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

    nano:flex
    nano:flex-row
    nano:gap-4
  `,
  link: `
    underline underline-offset-4
  `,
});

export default styles;
