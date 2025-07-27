import tw from '@/styles';

const card = tw(`
  relative
  rounded-lg
  h-full w-full
  overflow-hidden
`);

const grid = tw(`
  relative
  overflow-hidden
`);

const cta = tw(`
  flex items-center justify-center
  w-full h-full
  text-sm font-semibold uppercase
  cursor-pointer
  transition duration-500

  2xl:text-lg
`);

const styles = {
  container: (isInitial: boolean) => tw(`
    relative
    bg-stone-900
    h-dvh w-full
    ${isInitial ? 'animate-scale-enter' : ''}
  `),
  mouse: (isExiting: boolean) => tw(`
    hidden
    absolute inset-0 z-1
    flex justify-center
    transition duration-300
    pointer-events-none

    ${isExiting ? 'opacity-0' : 'opacity-40'}

    sm:block
  `),
  inner: tw(`
    relative z-2
    flex gap-4
    h-full
    p-4
  `),
  left: tw(`
    flex-1
    grid grid-cols-4 grid-rows-36 gap-4
  `),
  right: tw(`
    flex-1
    grid grid-cols-4 grid-rows-36 gap-4
  `),
  grid1: tw(`
    ${grid}
    col-span-4 row-span-18 order-0
  `),
  grid2: tw(`
    ${grid}
    col-span-2 row-span-14 order-1
  `),
  grid3: tw(`
    ${grid}
    col-span-2 row-span-14 order-2
  `),
  grid4: tw(`
    ${grid}
    col-span-2 row-span-4 order-3
  `),
  grid5: tw(`
    ${grid}
    col-span-1 row-span-4 order-4
  `),
  grid6: tw(`
    ${grid}
    col-span-1 row-span-4 order-5
  `),
  grid7: tw(`
    ${grid}
    col-span-2 row-span-8 order-0
  `),
  grid8: tw(`
    ${grid}
    col-span-2 row-span-8 order-4
  `),
  grid9: tw(`
    ${grid}
    col-span-2 row-span-20 order-3
  `),
  grid10: tw(`
    ${grid}
    col-span-2 row-span-28 order-2
  `),
  grid11: tw(`
    ${grid}
    col-span-2 row-span-4 order-5
  `),
  grid12: tw(`
    ${grid}
    col-span-2 row-span-32 order-2
  `),
  grid13: tw(`
    ${grid}
    col-span-2 row-span-4 order-1
  `),
  card: (direction: string, exitDirection: string) => tw(`
    ${exitDirection !== null ? `
      ${direction === 'left' ? (exitDirection === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right') : ''}
      ${direction === 'right' ? (exitDirection === 'next' ? 'animate-slide-out-right' : 'animate-slide-out-left') : ''}
      ${direction === 'up' ? (exitDirection === 'next' ? 'animate-slide-out-down' : 'animate-slide-out-up') : ''}
      ${direction === 'down' ? (exitDirection === 'next' ? 'animate-slide-out-up' : 'animate-slide-out-down') : ''}
    ` : `
      ${direction === 'left' ? 'animate-slide-in-right' : ''}
      ${direction === 'right' ? 'animate-slide-in-left' : ''}
      ${direction === 'up' ? 'animate-slide-in-up' : ''}
      ${direction === 'down' ? 'animate-slide-in-down' : ''}
    `}
  `),
  hero: tw(`
    ${card}

    before:absolute
    before:z-1
    before:inset-0
    before:bg-radial
    before:from-transparent
    before:to-black/40
    before:pointer-events-none
  `),
  image: tw(`
    object-cover
    w-full h-full
  `),
  caption: tw(`
    absolute bottom-8 left-8 z-2
    flex flex-col gap-2
    me-8
    text-left
  `),
  title: tw(`
    text-5xl font-thin uppercase

    2xl:text-7xl
  `),
  location: tw(`
    text-base font-extralight

    2xl:text-xl
  `),
  description: tw(`
    flex flex-col gap-4
    p-8
    ${card}
  `),
  map: tw(`
    flex items-center justify-center
    bg-black/30
    ${card}
  `),
  figure: tw(`
    relative
  `),
  marker: tw(`
    absolute z-1
    w-3 h-3
    rounded-full
    border-3 border-stone-200
    ring-2 ring-gray-900
    bg-black
  `),
  explore: tw(`
    ${card}
  `),
  previous: tw(`
    ${card}
    ${cta}
  `),
  next: tw(`
    ${card}
    ${cta}
  `),
  what: tw(`
    flex flex-col gap-4
    p-8
    ${card}
  `),
  which: tw(`
    flex flex-col gap-4
    p-8
    ${card}
  `),
  preview: tw(`
    ${card}
  `),
  gear: tw(`
    ${card}
  `),
  browse: tw(`
    ${card}
  `),
  cta: tw(`
    ${cta}
  `),
  text: (direction: string) => tw(`
    flex flex-col gap-4 justify-center
    h-full
    opacity-0

    ${direction === 'left' ? 'animate-slide-in-right-text' : ''}
    ${direction === 'right' ? 'animate-slide-in-left-text' : ''}
    ${direction === 'up' ? 'animate-slide-in-up-text' : ''}
    ${direction === 'down' ? 'animate-slide-in-down-text' : ''}
  `),
  heading: tw(`
    text-3xl text-left font-bold

    2xl:text-4xl
  `),
  excerpt: tw(`
    text-base font-light

    2xl:text-2xl
  `),
};

export default styles;
