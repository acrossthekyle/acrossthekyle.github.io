import tw from '@/styles';

const styles = tw({
  container: `
    relative
    border-1 border-(--foreground)/15
    rounded-t-md
    mt-8
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
    text-sm text-center text-(--foreground)
    bg-(--foreground)/25

    before:absolute
    before:left-18
    before:right-[calc(50%+2.75rem)]
    before:top-6.5
    before:z-0
    before:h-[1px]
    before:bg-(--foreground)/25
    after:absolute
    after:right-14
    after:left-[calc(50%+2.75rem)]
    after:top-6.5
    after:z-0
    after:h-[1px]
    after:bg-(--foreground)/25

    md:text-xs
    md:before:left-16
    md:before:top-6
    md:after:right-13
    md:after:top-6
  `,
  block: `
    relative z-1
    inline-block
    px-4 py-3.5
    font-bold
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
    font-bold
  `,
  end: `
    relative z-1
    px-4 py-3.5
    text-right
    font-bold
  `,
  altitude: `
    block
    mt-1
    text-xs
    font-normal

    md:text-tiny
  `,
});

export default styles;
