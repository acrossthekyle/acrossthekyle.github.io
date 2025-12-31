import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col justify-start gap-4
    p-4
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:bg-black light:bg-white
    dark:text-white light:text-black

    plank:flex-row
    plank:justify-between
    base:sticky
    base:top-0
    base:z-3
    base:p-8
    hecto:p-12
    mega:p-16
  `,
  cta: `
    text-xs
    uppercase
    font-bold
  `,
});

export default styles;
