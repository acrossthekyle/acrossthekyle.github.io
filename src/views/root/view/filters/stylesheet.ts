import tw from '@/styles';

const styles = tw({
  container: `
    fixed z-3 left-8 bottom-0 right-8
    flex flex-col justify-start gap-4
    p-4
    rounded-md

    dark:border-white/15 light:border-black/15
    dark:bg-black/90 light:bg-white/90
    dark:text-white light:text-black

    plank:flex-row
    plank:justify-between
    base:left-auto
    base:bottom-auto
    base:right-auto
    base:sticky
    base:top-0
    base:p-6
    base:rounded-none
    base:border-1
    base:border-l-0
    base:border-r-0
    base:border-t-0
    base:dark:bg-black
    base:light:bg-white
    hecto:p-8
    mega:p-12
  `,
  cta: `
    w-full
    text-sm text-center

    base:text-base
  `,
  underline: `
    underline underline-offset-4
  `,
});

export default styles;
