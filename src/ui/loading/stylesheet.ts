import tw from '@/styles';

const styles = tw({
  container: `
    flex-1
    flex items-center justify-center
  `,
  svg: `
    size-6
    animate-spin

    dark:text-white/90 light:text-black/90
  `,
  circle: `
    opacity-10
  `,
  path: `
    opacity-100
  `,
});

export default styles;
