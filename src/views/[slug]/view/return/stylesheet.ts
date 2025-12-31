import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    p-4
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:bg-black light:bg-white
    dark:text-white light:text-black

    base:sticky
    base:top-0
    base:z-3
    base:p-8
    hecto:p-12
    mega:p-16
  `,
  cta: `
    flex items-center gap-1
    text-xs
    uppercase
    font-bold
  `,
  icon: `
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
