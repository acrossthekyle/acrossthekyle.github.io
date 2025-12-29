import tw from '@/styles';

const styles = tw({
  filters: `
    flex justify-center
    py-8 px-8
    border-b-1 border-b-white/15
    text-center text-sm/6
    tracking-wide
    min-h-26

    dark:bg-black light:bg-white

    base:sticky
    base:top-0
    base:z-3
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
