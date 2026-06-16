import tw from '@/styles';

const INDEXES = [
  'absolute right-full top-0.25 bottom-0 mr-16 origin-right text-right',
  'relative -right-full ml-24 top-2.5 text-left',
];

const HEADINGS = [
  'relative -right-4 origin-right',
  'relative -left-4 text-right origin-left',
];

const WHENS = [
  'absolute right-full bottom-0.25 origin-right mr-16',
  'relative -right-full origin-left ml-16 -mt-2.75',
];

const TIMELINES = [
  'w-[2svw] md:w-[4svw] lg:w-[8svw]',
  'w-[2svw] md:w-[4svw] lg:w-[8svw]',
  'w-[1svw] md:w-[2svw] lg:w-[4svw]',
  'w-[2svw] md:w-[4svw] lg:w-[8svw]',
];

const LOCATIONS = [
  'relative right-1/2 items-end origin-right text-right mr-4',
  'relative left-1/2 text-left inline-flex origin-left ml-4',
];

const COORDINATES = [
  'relative left-1/2 -bottom-8 inline-flex -rotate-90 -ml-2',
  'relative right-1/2 bottom-0 mr-4 text-right origin-bottom-right -rotate-90',
];

const HINTS = [
  'right-0 translate-x-18 border-l motion-safe:group-hover/item:translate-x-0',
  'left-0 -translate-x-18 border-l motion-safe:group-hover/item:translate-x-0',
];

const WORDS = [
  'rotate-90',
  '-rotate-90',
];

export const styles = tw({
  divider: `
    h-8
    text-current/10
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]

    lg:hidden
  `,
  wrapper: `
    overflow-x-hidden
    overflow-y-scroll
    no-scrollbar

    lg:h-screen

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  upper: `
    flex items-end justify-between
    h-24 w-full
    p-4
    border-t border-current/10 border-dashed
  `,
  header: `
    flex flex-col gap-3
    text-[min(6vw,28px)]
    font-thin font-serif
    leading-[0.85]

    sm:text-[min(3.5vw,28px)]
    lg:text-[min(2vw,28px)]
  `,
  footnote: `
    leading-[0.85]
    text-[min(5vw,16px)] text-current/75
    italic

    sm:text-[min(2vw,16px)]
    lg:text-[min(1.25vw,16px)]
  `,
  filters: `
    flex flex-col items-end justify-between gap-2.75
    h-full
  `,
  filter: `
    flex items-center gap-2
    leading-[0.85]
    font-serif font-bold
    italic
    text-xtiny
    uppercase
    tracking-widest
  `,
  brackets: `
    font-mono
  `,
  container: `
    flex flex-col items-center
  `,
  item: (isInView: boolean, index: number) => tw(`
    group/item
    relative
    flex items-center justify-center gap-4
    w-[calc(100%-1rem)]
    bg-transparent
    border-y border-transparent border-dashed

    before:absolute
    before:left-1/2
    before:top-6
    before:bottom-6
    before:w-px
    before:border-l
    before:border-dashed
    before:border-current/20

    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-top-0.5
    after:h-px
    after:w-6
    after:border-b
    after:border-dashed
    after:border-current/20

    first:after:hidden
    first:border-t
    first:border-t-current/10

    sm:w-[calc(100%-4px)]

    motion-safe:ease-in-out
    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2
    motion-safe:hover:border-current/10

    ${isInView ? `
      opacity-100
    ` : `
      opacity-0
    `}
  `),
  hint: (index: number) => tw(`
    hidden
    absolute top-0 bottom-0
    flex items-center justify-center
    h-full w-8
    uppercase
    text-xtiny
    font-mono
    tracking-widest
    border-dashed border-current/10

    motion-safe:ease-in-out
    motion-safe:duration-300

    ${HINTS[index % HINTS.length]}
  `),
  words: (index: number) => tw(`
    whitespace-nowrap
    origin-center

    ${WORDS[index % WORDS.length]}
  `),
  shaded: `
    absolute inset-0
    text-current/10
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]
  `,
  link: `
    relative
    py-10
    w-full
    overflow-hidden
    text-left
  `,
  heading: (index: number) => tw(`
    flex flex-col
    text-[min(9vw,58px)]
    font-serif font-bold
    uppercase
    whitespace-nowrap
    scale-x-[0.5]
    leading-[0.8]

    sm:text-[min(4.6vw,46px)]
    lg:text-[min(4.25vw,58px)]
    2xl:text-[min(10vw,80px)]

    ${HEADINGS[index % HEADINGS.length]}
  `),
  chunk: `
    block
  `,
  index: (index: number) => tw(`
    w-14
    leading-[0.85]
    font-bold font-mono
    tracking-widest
    uppercase
    text-tiny
    scale-x-[2]
    italic

    ${INDEXES[index % INDEXES.length]}
  `),
  coordinates: (index: number) => tw(`
    flex flex-col gap-0.5
    font-mono
    leading-[0.85]
    tracking-widest
    uppercase
    text-tiny text-right

    ${COORDINATES[index % COORDINATES.length]}
  `),
  when: (index: number) => tw(`
    flex items-center gap-4
    leading-[0.85]
    text-xs
    font-serif
    tracking-tighter
    italic
    scale-x-[2]

    sm:gap-2
    md:gap-4

    ${WHENS[index % WHENS.length]}
  `),
  timeline: (index: number) => tw(`
    block
    h-px
    bg-(--foreground)/50

    ${TIMELINES[index % TIMELINES.length]}
  `),
  location: (index: number) => tw(`
    flex flex-col gap-1
    leading-[1]
    text-tiny
    uppercase
    tracking-widest
    scale-x-[1]
    mt-2

    ${LOCATIONS[index % LOCATIONS.length]}
  `),
  address: `
    block
    w-28
  `,
  emphasis: `
    font-serif
    italic
  `,
});


