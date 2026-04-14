import tw from '@/styles';

const styles = tw({
  container: `
    flex-1
    flex items-center justify-center
    overscroll-none
  `,
  sr: `
    invisible
    absolute top-0 right-0 z-0
  `,
  svg: `
    absolute bottom-4 right-4 z-1
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
  progress: `
    absolute top-4 left-4 right-4 z-1
    flex gap-2
    font-mono font-normal
    text-xtiny
  `,
  bar: `
    inline-block
    mr-3
    overflow-hidden
    text-clip
  `,
  cap: `
    absolute right-0
  `,
  meta: `
    absolute top-9 left-4 z-1
    grid grid-cols-2 gap-36
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  col: `
    flex flex-col gap-2
  `,
  location: `
    absolute bottom-4 left-4
    text-xtiny
    font-mono font-normal
  `,
});

export default styles;
