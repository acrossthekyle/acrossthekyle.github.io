import tw from '@/styles';

const styles = tw({
  toggle: `
    fixed bottom-6 right-6 z-9
    flex items-center justify-center

    sm:right-8
    lg:fixed
    lg:bottom-8
  `,
  dot: `
    block
    rounded-full
    w-4 h-4

    dark:bg-yellow-400 light:bg-slate-800
  `,
});

export default styles;
