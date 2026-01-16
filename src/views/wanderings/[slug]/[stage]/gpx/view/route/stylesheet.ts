import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    h-100 w-full
    rounded-lg
    overflow-hidden
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-0
    stroke-4
    !pointer-events-none

    stroke-[#1b1b1b]
  `,
  outer: `
    relative
    stroke-8
    !pointer-events-none

    fill-[#1b1b1b]
    stroke-[#1b1b1b]
  `,
});

export default styles;
