import tw from '@/styles';

const ASPECTS = [
  [
    'aspect-video',
    'aspect-square',
    'aspect-square',
  ],
  [
    'aspect-square',
    'aspect-square',
    'aspect-video',
  ],
  [
    'aspect-square',
    'aspect-square',
    'aspect-square',
  ],
];

const POSITIONS = [
  [
    'w-full mt-4 col-span-3 order-0',
    'w-full mt-0 col-span-3 order-1',
    'w-full mt-0 col-span-2 order-2',
  ],
  [
    'w-full mt-4 col-span-2 order-0',
    'w-full mt-4 col-span-3 order-1',
    'w-full mt-0 col-span-3 order-2',
  ],
  [
    'w-full mt-4 col-span-2 order-0',
    'w-full mt-0 col-span-2 order-2',
    'w-full mt-4 col-span-3 order-1',
  ],
];

const styles = tw({
  container: `
    grid grid-cols-1
    h-auto w-full

    sm:grid-cols-2
    lg:grid-cols-3
    lg:h-full
    lg:flex
  `,







  header: `
    col-span-1 order-0
    flex flex-col justify-end
    h-auto min-h-[80vh]
    p-4 pt-10 pb-10

    sm:pb-4
    sm:mb-10
    sm:h-svh

    landscape-constrained:mt-30
    landscape-constrained:justify-start

    lg:mb-0
    lg:h-screen
    lg:fixed
    lg:left-10
    lg:w-1/3
    lg:border-l-1
    lg:border-current/10
    lg:grid
    lg:grid-cols-1
    lg:grid-rows-2

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
    text-tiny text-current/90
    leading-[1.375]
    font-normal
    tracking-widest
  `,
  eyebrow: `
    block
    relative top-1
    text-xtiny text-current/75
    font-normal
    tracking-widest
    uppercase
  `,
  overview: `
    flex flex-col justify-start
    mt-10

    lg:justify-end
  `,
  paragraph: `
    w-full max-w-96
    mb-4
    text-sm

    last:mb-0

    sm:max-w-64
    sm:text-xs
  `,








  content: `
    col-span-1 order-2
    h-auto
    border-t-1 border-current/10

    sm:h-screen
    sm:border-l-1
    sm:border-t-0
    sm:fixed
    sm:top-0
    sm:right-0
    sm:w-[50vw]
    lg:w-[calc(33.3333333333vw-0.75rem)]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  map: `
    relative
    w-full
    h-80
    overflow-hidden
    bg-(--foreground)/5

    sm:h-full
  `,
  coordinates: `
    absolute bottom-4 right-4 z-2
    flex flex-col gap-0.5
    leading-[1]
    font-extralight
    text-xtiny text-right
    uppercase
    tracking-widest
  `,
  plugin: `
    relative z-1
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
    col-span-2 order-1
    h-auto w-screen
    p-4

    sm:gap-0
    sm:w-1/2
    sm:order-2
    lg:col-span-1
    lg:order-1
    lg:absolute
    lg:left-1/3
    lg:w-1/3
    lg:h-full
    lg:p-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  group: `
    relative
    grid grid-cols-5 gap-4
    h-auto
    mr-1

    lg:last:pb-4
  `,
  figure: (group: number, index: number) => tw(`
    ${POSITIONS[group % 3][index]}
    ${ASPECTS[group % 3][index]}
  `),
  cta: `
    group
    relative z-1
    h-full w-full
    overflow-hidden

    lg:!cursor-zoom-in
  `,
  image: `
    motion-safe:grayscale
    motion-safe:sepia-10
    motion-safe:brightness-90
    motion-safe:duration-700
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-20
    motion-safe:group-hover:brightness-75
    motion-safe:group-hover:scale-102
  `,
  caption: `
    relative
    flex flex-col
    w-full
    mt-2
    text-xtiny text-white
    font-normal
    tracking-widest
    uppercase
  `,
  img: `
    flex justify-between gap-4
    tracking-widest
  `,
  index: `
    absolute top-0 right-0
    flex flex-col gap-0 items-end
    tracking-[0.125rem]
  `,
  meta: `
    flex flex-col gap-0
    pt-2
  `,
  strong: `
    font-black
  `,
});

export default styles;
