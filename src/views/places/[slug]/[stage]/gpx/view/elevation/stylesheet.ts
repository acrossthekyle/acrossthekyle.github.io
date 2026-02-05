import tw from '@/styles';

const styles = tw({
  container: `
    relative
    border-1 border-(--foreground)/15
    rounded-t-md
  `,
  chart: `
    h-48 w-full
    select-none
    touch-none
  `,
  change: `
    absolute top-2 left-2 z-9
    flex items-center gap-2
    text-sm
    !mb-0

    md:text-xs
  `,
  chevron: `
    inline
    w-5 h-5
    pr-1
  `,
  grid1: `
    absolute top-8.5 left-0 z-0
    w-full h-[1px]
    bg-(--foreground)/7
  `,
  grid2: `
    absolute top-17 left-0 z-0
    w-full h-[1px]
    bg-(--foreground)/7
  `,
  grid3: `
    absolute top-25.5 left-0 z-0
    w-full h-[1px]
    bg-(--foreground)/7
  `,
  distance: `
    relative
    flex items-start justify-between
    text-sm text-center
    !mb-0

    dark:bg-[#313131] light:bg-[#aaaaaa]
    dark:text-[#faf9f5] light:text-(--foreground)

    before:absolute
    before:left-0
    before:right-0
    before:top-5.5
    before:z-0
    before:h-[1px]
    before:bg-(--foreground)/25

    md:text-xs
  `,
  block: `
    relative z-1
    inline-block
    px-4 py-3.5
    font-bold
    dark:bg-[#313131] light:bg-[#aaaaaa]
  `,
  time: `
    block
    mt-1
    font-normal
    text-xs

    md:text-tiny
  `,
  start: `
    relative z-1
    px-4 py-3.5
    text-left

    dark:bg-[#313131] light:bg-[#aaaaaa]
  `,
  end: `
    relative z-1
    px-4 py-3.5
    text-right

    dark:bg-[#313131] light:bg-[#aaaaaa]
  `,
  altitude: `
    block
    mt-1
    text-xs

    md:text-tiny
  `,
});

export default styles;
