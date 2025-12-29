import tw from '@/styles';

const styles = tw({
  filters: `
    flex justify-center
    sticky top-0 z-3
    py-8 px-8
    border-b-1 border-b-white/15
    text-center text-sm
    tracking-wide
    min-h-26

    dark:bg-black light:bg-white

    base:min-h-auto
    base:py-8
    hecto:py-12
    mega:text-base
  `,
  list: `
    flex flex-col justify-center

    base:flex-row
  `,
  item: `
    inline-block
    mr-1

    last:mr-0
  `,
  cta: `
    inline-block
    underline underline-offset-4
    font-bold
  `,
});

export default styles;
