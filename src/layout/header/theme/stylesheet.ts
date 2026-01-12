import tw from '@/styles';

const styles = tw({
  toggle: `
    absolute top-4 right-4

    flex items-center justify-center
    w-8 h-8

    base:top-6
    base:right-6
    hecto:top-10
    hecto:right-10
    kilo:top-14
    kilo:right-14
  `,
  dot: `
    block
    rounded-full
    w-4 h-4

    dark:bg-yellow-400 light:bg-slate-800
  `,
});

export default styles;
