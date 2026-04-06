import tw from '@/styles';

const styles = tw({
  container: `
    flex-1
    flex items-center justify-center
    bg-(--background)
  `,
  svg: `
    size-6
    animate-spin
  `,
  circle: `
    opacity-10
    stroke-(--foreground)
  `,
  path: `
    opacity-100
    fill-(--foreground)
  `,
});

export default styles;
