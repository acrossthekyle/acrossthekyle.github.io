import tw from '@/styles';

const styles = tw({
  section: `
    mt-6
    h-75 w-full
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
    stroke-black
    !pointer-events-none
  `,
});

export default styles;
