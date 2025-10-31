import tw from '@/styles';

const styles = tw({
  container: `
    w-full h-full
    flex items-center justify-center
    scale-500
  `,
  svg: `
    size-5
    text-black/90 dark:text-white/90
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
