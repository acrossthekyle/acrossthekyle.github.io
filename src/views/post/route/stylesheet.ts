import tw from '@/styles';

const styles = tw({
  section: `
    h-100 w-full
    mb-2
    border-1 border-white/12.5
    rounded-sm
    overflow-hidden
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-2
    stroke-3
    stroke-white/90
    !pointer-events-none
  `,
  outer: `
    relative
    stroke-white/90
    stroke-5
    !pointer-events-none
  `,
  inner: `
    relative z-2
    fill-black
    stroke-black
    !pointer-events-none
  `,
  solid: `
    fill-white
    stroke-black
    stroke-2
  `,
  icon: `
    w-3 h-3
    fill-white/90
    stroke-2
  `,
});

export default styles;
