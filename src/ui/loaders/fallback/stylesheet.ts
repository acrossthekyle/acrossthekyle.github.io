import tw from '@/styles';

const styles = tw({
  container: `
    fixed inset-0 z-9999
    flex items-center justify-center
    bg-(--background)
  `,
  sr: `
    invisible
    absolute top-0 right-0 z-0
  `,
  svg: `
    size-6

    motion-safe:animate-spin
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
