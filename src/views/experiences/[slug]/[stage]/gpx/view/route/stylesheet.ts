import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    h-100 w-full
    border-1 border-(--foreground)/15 border-t-0
    rounded-b-lg
    overflow-hidden
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-0
    stroke-4 stroke-[#1b1b1b]
    !pointer-events-none
  `,
  outer: `
    relative
    stroke-8 stroke-[#1b1b1b]
    fill-[#1b1b1b]
    !pointer-events-none
  `,
});

export default styles;
