import tw from '@/styles';

const styles = tw({
  container: `
    absolute -bottom-2 -right-2 z-0
    p-2

    md:fixed
    md:bottom-12
    md:right-12
  `,
  dot: `
    block
    rounded-full
    w-5 h-5
    bg-(--foreground)/75

    md:w-3.5
    md:h-3.5
  `,
});

export default styles;
