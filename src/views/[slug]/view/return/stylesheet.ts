import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center
    py-8 px-8
    border-b-1 border-b-white/15
    text-center text-base
    tracking-wide
    min-h-26

    dark:text-white light:text-black
    dark:bg-black light:bg-white

    base:sticky
    base:top-0
    base:z-3
    base:py-8
    hecto:py-12
    hecto:px-12
    mega:px-16
  `,
  return: `
    flex items-center gap-1
    font-bold
  `,
  icon: `
    w-4 h-4
    stroke-2
  `,
});

export default styles;
