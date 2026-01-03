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
    base:p-6
    hecto:p-8
    mega:p-12
  `,
  cta: `
    flex items-center gap-1
    text-sm

    base:text-base
  `,
  icon: `
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
