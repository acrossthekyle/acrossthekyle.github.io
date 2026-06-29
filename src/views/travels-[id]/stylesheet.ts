import tw from '@/styles';

const ITEM = [
  'items-start',
  'items-end',
  'items-center',
  'items-start',
  'items-end',
  'items-end',
];

const ANIMATABLE = [
  'motion-safe:-top-20 motion-safe:scale-90',
  'motion-safe:scale-110',
  'motion-safe:-top-20 motion-safe:scale-140',
  'motion-safe:-top-20 motion-safe:scale-70',
  'motion-safe:scale-110',
  'motion-safe:scale-130',
];

const FIGURE = [
  'w-[46svh] md:w-[51.5svw]',
  'w-[44svh] md:w-[44svw]',
  'w-[50svh] md:w-[50svw]',
  'w-[60svh] md:w-[60svw]',
  'w-[50svh] md:w-[50svw]',
  'w-[46svh] md:w-[46svw]',
];

const IMAGE = [
  'aspect-video',
  'aspect-4/3',
  'aspect-video',
  'aspect-4/3',
  'aspect-video',
  'aspect-square',
];

const CAPTION = [
  'left-full -ml-42 top-44.5 rotate-90',
  'right-full -mr-42 bottom-44.5 text-left -rotate-90',
  'right-full -mr-40 top-44.5 text-left rotate-90',
  'right-full -mr-42 bottom-44.5 text-left -rotate-90',
  'right-full -mr-40 top-44.5 text-left rotate-90',
  'left-full -ml-42 bottom-44.5 text-right rotate-90',
];

export const styles = tw({
  container: `
    flex flex-row
    w-auto h-svh
    overflow-y-clip overflow-x-visible
  `,
  header: `
    absolute bottom-1/3 left-0 z-2
    -translate-y-1/3
    w-full

    md:top-1/2
    md:bottom-auto
    md:-translate-y-1/2
  `,
  title: (isInView: boolean) => tw(`
    relative
    flex flex-col
    w-full max-w-6xl
    px-6
    mx-auto

    leading-[0.85]
    uppercase
    text-[min(5.5vw,42px)]

    md:text-[min(5.5vw,56px)]
    lg:text-[min(5.5vw,72px)]
    2xl:text-[min(10vw,96px)]

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:left-0
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:-left-20
      motion-safe:opacity-0
      motion-safe:scale-110
    `}
  `),
  line: `
    flex justify-between
    text-left
    whitespace-nowrap
  `,
  heavy: `
    font-black
  `,
  thin: `
    font-thin
  `,
  serif: `
    relative -top-0.25
    font-serif

    md:-top-0.5
  `,
  sans: `
    font-sans
  `,
  italic: `
    italic
  `,
  spacer: `
    inline-block
    w-[8svw]
  `,
  total: (isInView: boolean) => tw(`
    absolute left-1/4
    -translate-x-1/4
    flex items-end gap-4
    leading-[1]
    uppercase
    text-[min(26vw,6rem)] text-left text-current/85
    font-thin font-sans
    italic
    origin-left scale-x-[0.5]

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:bottom-20
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:-bottom-20
      motion-safe:opacity-0
      motion-safe:scale-110
    `}
  `),
  small: `
    inline-block
    pb-2.5
    text-xs
    font-bold font-serif italic
    tracking-widest
  `,
  when: (isInView: boolean) => tw(`
    fixed right-6 z-10
    flex items-center gap-2
    uppercase
    font-light
    text-xtiny text-left
    whitespace-nowrap
    tracking-[0.5svw]

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-6
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:-top-20
      motion-safe:opacity-0
      motion-safe:scale-110
    `}
  `),
  hint: `
    fixed bottom-4 left-6 z-10
    flex items-center gap-4
    text-tiny text-current/50
    font-serif
    italic
    font-bold
    uppercase
    tracking-widest
  `,
  arrow: `
    w-5 h-5
    stroke-1
  `,
  items: `
    flex flex-row gap-[6svw]
    py-18 px-6
  `,
  item: (index: number, inView: boolean) => tw(`
    relative
    flex shrink-0
    pr-15

    ${ITEM[index % 6]}

    motion-safe:duration-700

    ${inView ? `
      motion-safe:opacity-0
      motion-safe:animate-fade-in-slightly-delayed
      motion-safe:scale-100
    ` : `
      motion-safe:opacity-0
      ${ANIMATABLE[index % 6]}
    `}
  `),
  buffer: `
    hidden
    w-14 h-full shrink-0
  `,
  figure: (index: number) => tw(`
    relative
    ${index === 1 ? '-left-4' : ''}

    ${FIGURE[index % 6]}
  `),
  image: (index: number) => tw(`
    sepia-10
    grayscale-20
    opacity-80 dark:opacity-80

    ${IMAGE[index % 6]}
  `),
  caption: (index: number) => tw(`
    absolute
    h-11 w-100

    ${CAPTION[index % 6]}
  `),
  heading: `
    flex flex-col gap-1
    leading-[0.85]
    whitespace-nowrap
    uppercase
  `,
  date: `
    text-xtiny
    font-mono
    tracking-widest
  `,
  location: `
    font-black
    text-xs
  `,
  country: `
    text-xtiny
    tracking-widest
  `,
});
