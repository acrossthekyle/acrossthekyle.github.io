import tw from '@/styles';

const styles = tw({
  container: `
    relative z-0
    h-68
    border-1 border-(--foreground)/15 border-t-0
    overflow-hidden
  `,
  icon: `
    w-4 h-4
  `,
  map: `
    relative
    h-68 w-full
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
