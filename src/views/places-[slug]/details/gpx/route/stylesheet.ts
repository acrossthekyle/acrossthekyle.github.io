import tw from '@/styles';

const styles = tw({
  container: (isExpanded: boolean) => tw(`
    relative z-0
    ${isExpanded ? 'h-106' : 'h-9 md:h-8'} w-full
    mb-16
    border-1 border-(--foreground)/15 border-t-0
    rounded-b-md
    overflow-hidden
    duration-300
  `),
  toggle: `
    w-full
    flex items-center justify-between gap-16
    py-2 pl-4 pr-3
    text-sm

    md:text-xs
  `,
  icon: `
    w-4 h-4
  `,
  map: `
    relative
    h-100 w-full
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
