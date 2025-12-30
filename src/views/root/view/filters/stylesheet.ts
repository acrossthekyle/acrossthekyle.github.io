import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col justify-start gap-4
    p-8
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:bg-black light:bg-white
    dark:text-white light:text-black

    plank:flex-row
    plank:justify-between
    base:sticky
    base:top-0
    base:z-3
    hecto:p-12
    mega:p-16
  `,
  cta: `
    flex items-center gap-1
    text-xs
    uppercase
    font-bold
  `,
});

export default styles;
