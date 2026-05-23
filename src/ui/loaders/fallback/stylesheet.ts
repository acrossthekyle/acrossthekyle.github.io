import tw from '@/styles';

const styles = tw({
  container: `
    fixed inset-x-10 inset-y-0 z-9999
    flex items-center justify-center
    bg-(--background)
    border-x border-current/10
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
