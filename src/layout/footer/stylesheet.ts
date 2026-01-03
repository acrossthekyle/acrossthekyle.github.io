import tw from '@/styles';

const styles = tw({
  container: `
    border-t-1
    py-8 px-8
    text-xs text-center

    dark:border-t-white/15 light:border-t-black/15
    dark:bg-black light:bg-white
    dark:text-white light:text-black

    base:py-12
    base:pl-86
    hecto:pl-106
    mega:pl-150
  `,
  content: `
  `,
  theme: `
    mb-4
    text-xs
    uppercase
    font-bold
  `,
  links: `
    flex justify-center
    mb-4

    base:hidden
  `,
  list: `
    grid grid-cols-2 gap-4

    pico:flex
    pico:flex-row
    pico:gap-4
  `,
  link: `
    text-sm
    underline underline-offset-4
  `,
});

export default styles;
