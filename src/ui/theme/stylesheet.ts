import tw from '@/styles';

const styles = tw({
  toggle: `
    flex items-center justify-center

    md:top-8
    md:right-8
    md:right-8
    md:bottom-8
    md:top-auto
    md:fixed
  `,
  dot: `
    block
    rounded-full
    w-4 h-4

    dark:bg-yellow-400 light:bg-slate-800
  `,
});

export default styles;
