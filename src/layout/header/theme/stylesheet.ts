import tw from '@/styles';

const styles = tw({
  toggle: `
    absolute top-4 right-6

    flex items-center justify-center
    w-8 h-8

    base:top-6
    base:right-8
    hecto:top-10
    hecto:right-12
    kilo:top-14
    kilo:right-16
  `,
  dot: `
    block
    rounded-full
    w-4 h-4

    dark:bg-yellow-400 light:bg-slate-800
  `,
});

export default styles;
