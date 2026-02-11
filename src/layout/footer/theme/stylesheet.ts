import tw from '@/styles';

const styles = tw({
  container: `
    absolute -bottom-2 -right-2 z-2
    p-2

    md:fixed
    md:bottom-6
    md:right-6
  `,
  dot: `
    block
    rounded-full
    w-3.5 h-3.5
    bg-(--foreground)/75
  `,
});

export default styles;
