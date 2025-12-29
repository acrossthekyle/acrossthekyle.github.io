import tw from '@/styles';

const styles = tw({
  container: `
    border-t-1

    dark:border-t-white/15 light:border-t-black/15
    dark:bg-black light:bg-white

    base:pl-86
    hecto:pl-106
    mega:pl-150
  `,
  content: `
    py-8 px-8
    text-xs text-center

    dark:text-white light:text-black

    base:py-12
  `,
});

export default styles;
