import tw from '@/styles';

const styles = tw({
  container: `
    w-full h-full
    flex items-center justify-center
    scale-500
  `,
  svg: `
    size-5
    text-white
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
