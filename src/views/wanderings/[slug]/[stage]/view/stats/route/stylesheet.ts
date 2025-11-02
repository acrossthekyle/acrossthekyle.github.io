import tw from '@/styles';

const styles = tw({
  section: `
    h-[calc(100%-13rem)] w-full
    overflow-hidden
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-2
    stroke-3
    stroke-white/70
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
