import tw from '@/styles';

const ASPECTS = ['aspect-12/16', 'aspect-4/3', 'aspect-video', 'aspect-portrait'];

const styles = tw({
  container: `
    h-auto w-full
    flex flex-col
    divide-y divide-current/10
    overflow-hidden

    sm:grid
    sm:grid-cols-2
    sm:divide-x
    lg:h-screen
    lg:overflow-hidden
    lg:divide-y-0
    lg:grid-cols-3
  `,







  header: `
    col-span-1 order-0
    grid grid-cols-1 grid-rows-2
    h-[84vh]
    p-4 pt-10

    sm:h-svh
    lg:h-screen

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  title: `
    flex flex-col justify-end
    text-[min(12vw,44px)]
    font-black
    leading-[0.85]
    uppercase

    sm:text-[min(5vw,40px)]
    lg:text-[min(3.5vw,42px)]
  `,
  chunk: `
    block
  `,
  lid: `
    block
    w-full max-w-48
    mt-3
    text-tiny
    leading-[1.375]
    font-normal
    tracking-widest
  `,
  eyebrow: `
    block
    relative top-1
    text-tiny text-current/75
    font-normal
    tracking-widest
    uppercase

    md:text-xtiny
  `,
  overview: `
    flex flex-col justify-end
  `,
  paragraph: `
    w-full
    mb-4
    text-sm

    last:mb-0

    sm:max-w-72
    md:text-xs
  `,








  content: `
    col-span-1 order-1
    flex flex-col gap-4 justify-between
    h-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  map: `
    relative
    w-full
    h-100
    overflow-hidden
    bg-(--foreground)/5

    sm:h-full
  `,
  plugin: `
    relative
    h-full w-full
  `,
  marker1: `
    relative
    stroke-1 stroke-(--foreground)/10
    fill-(--foreground)/4
    !pointer-events-none
  `,
  marker2: `
    relative
    stroke-1 stroke-(--foreground)/10
    fill-(--background)
    !pointer-events-none
  `,
  marker3: `
    relative
    stroke-1 stroke-(--foreground)/10
    fill-(--foreground)
    !pointer-events-none
  `,
  marker4: `
    relative
    stroke-4 stroke-(--background)
    fill-(--background)
    !pointer-events-none
  `,








  gallery: `
    col-span-2 order-2
    h-auto

    sm:columns-2
    sm:gap-0
    lg:columns-auto
    lg:overflow-y-scroll
    lg:col-span-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  figure: `
    relative
  `,
  cta: `
    group
    relative z-1
    block
    h-full w-full
  `,
  item: (index: number) => tw(`
    ${ASPECTS[index % ASPECTS.length]}

    motion-safe:grayscale
    motion-safe:sepia-10
    motion-safe:brightness-90
    motion-safe:duration-1000
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-20
    motion-safe:group-hover:brightness-75
  `),
  caption: `
    absolute bottom-0 left-0 right-0 z-2
    flex flex-col
    w-full
    p-4
    text-xtiny text-white
    font-normal
    tracking-widest
    uppercase
    pointer-events-none
  `,
  img: `
    flex justify-between gap-4
    font-black
    tracking-widest
    text-tiny
  `,
  index: `
    text-xtiny
    font-light
    tracking-[0.125rem]
  `,
  meta: `
    mt-4
    flex flex-col gap-0
  `,
  strong: `
    font-black
  `,
  arrow: `
    absolute bottom-4 right-4 z-2
    stroke-1
    w-4
    h-4

    lg:w-5
    lg:h-5
  `,
});

export default styles;
