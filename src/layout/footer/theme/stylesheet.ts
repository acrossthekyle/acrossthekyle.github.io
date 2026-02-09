import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-0 right-0 z-2

    md:fixed
    md:bottom-8
    md:right-8
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
