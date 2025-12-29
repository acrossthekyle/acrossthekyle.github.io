import tw from '@/styles';

const styles = tw({
  container: `
    h-dvh
    flex items-center justify-center
  `,
  svg: `
    size-6
    dark:text-white/90 light:text-black/90
    animate-spin
  `,
  circle: `
    opacity-10
  `,
  path: `
    opacity-100
  `,
});

export default styles;
