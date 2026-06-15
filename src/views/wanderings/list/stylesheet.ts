import tw from '@/styles';

const INDEXES = [
  'absolute right-full top-1 bottom-0 mr-8 origin-right text-right',
  'relative -right-full ml-14 top-3.25 text-left',
];

const HEADINGS = [
  'relative right-0 origin-right',
  'relative left-0 text-right origin-left',
];

const WHENS = [
  'absolute right-full bottom-0.75 origin-right mr-8',
  'relative -right-full origin-left ml-8 -mt-3.25',
];

const TIMELINES = [
  'w-[8svw] sm:w-[10svw] motion-safe:sm:group-hover/link:w-[16svw]',
  'w-[8svw] motion-safe:sm:group-hover/link:w-[12svw]',
  'w-[8svw] sm:w-[4svw] motion-safe:sm:group-hover/link:w-[10svw]',
  'w-[8svw] sm:w-[10svw] motion-safe:sm:group-hover/link:w-[16svw]',
];

const LOCATIONS = [
  'relative right-1/2 items-end origin-right text-right',
  'relative left-1/2 text-left inline-flex origin-left',
];

const COORDINATES = [
  'relative left-1/2 -bottom-8 inline-flex -rotate-90',
  'relative right-1/2 bottom-0 mr-6 text-right origin-bottom-right -rotate-90',
];

export const styles = tw({
  item: (isInView: boolean, index: number) => tw(`
    group/item
    flex items-center justify-center gap-4
    w-[calc(100%-1rem)]
    border-b
    border-x border-dashed border-current/10

    sm:w-[calc(100%-4rem)]
    lg:w-[52vw]
    2xl:w-240

    motion-safe:ease-in-out
    motion-safe:duration-300

    ${isInView ? `
      translate-y-0
      opacity-100
    ` : `
      -translate-y-20
      opacity-0
    `}
  `),
  link: `
    group/link
    relative
    py-10
    w-full

    overflow-hidden
  `,
  heading: (index: number) => tw(`
    flex flex-col
    font-serif font-bold
    uppercase
    whitespace-nowrap
    scale-x-[0.5]
    leading-[0.8]
    text-[min(9.75vw,70px)]

    2xl:text-[min(10vw,90px)]

    motion-safe:sm:duration-300
    motion-safe:sm:group-hover/link:tracking-widest

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

    group-hover/link:font-bold

    ${WHENS[index % WHENS.length]}
  `),
  timeline: (index: number) => tw(`
    block
    h-px
    bg-(--foreground)/50

    motion-safe:duration-300

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


