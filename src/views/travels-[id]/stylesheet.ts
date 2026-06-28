import tw from '@/styles';

const ITEM = [
  'md:items-start',
  'md:items-end',
  'md:items-center',
  'md:items-start',
  'md:items-end',
  'md:items-end',
];

const ANIMATABLE = [
  'motion-safe:top-20 motion-safe:md:-top-20 motion-safe:scale-90',
  'motion-safe:top-20 motion-safe:scale-110',
  'motion-safe:top-20 motion-safe:md:-top-20 motion-safe:scale-140',
  'motion-safe:top-20 motion-safe:md:-top-20 motion-safe:scale-70',
  'motion-safe:top-20 motion-safe:scale-110',
  'motion-safe:top-20 motion-safe:scale-130',
];

const FIGURE = [
  'md:h-[51.5svh]',
  'md:h-[44svh]',
  'md:h-[50svh]',
  'md:h-[60svh]',
  'md:h-[50svh]',
  'md:h-[64svh]',
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
  'bottom-0 left-4 md:left-full md:pl-4 md:top-12',
  'bottom-0 right-4 md:right-full md:pr-4 md:bottom-12 text-right',
  'top-4 right-4 md:right-full md:pr-4 md:top-12 text-right',
  'bottom-0 left-4 md:left-full md:pl-4 md:top-12',
  'bottom-0 right-4 md:right-full md:pr-4 md:bottom-12 text-right',
  'top-4 left-4 md:left-full md:pl-4 md:bottom-12',
];

export const styles = tw({
  container: `
    flex flex-col
    w-svw h-auto
    overflow-x-clip
    no-scrollbar

    md:w-auto
    md:h-svh
    md:overflow-y-clip
    md:overflow-x-visible
    md:flex-row
  `,
  header: `
    relative z-2
    flex items-start justify-center
    h-auto w-svw shrink-0
    pt-24 pb-12

    md:absolute
    md:h-svh
    md:items-center
    md:mt-0
    md:py-0
  `,
  title: (isInView: boolean) => tw(`
    relative
    flex flex-col
    w-full max-w-6xl
    p-6

    leading-[1.25]
    uppercase
    text-[min(5.5vw,42px)]

    md:text-[min(5.5vw,56px)]
    md:leading-[1]
    lg:text-[min(5.5vw,72px)]
    2xl:text-[min(10vw,96px)]

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:-top-20
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
  where: (isInView: boolean) => tw(`
    absolute right-6
    w-[100svh]
    uppercase
    text-tiny text-right
    tracking-[0.5svw]
    font-light
    origin-right scale-x-[0.7]

    md:fixed

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
  when: (isInView: boolean) => tw(`
    absolute right-6
    flex items-center gap-2
    uppercase
    font-light
    text-xtiny text-left
    whitespace-nowrap
    tracking-[0.5svw]

    md:fixed
    md:bottom-6
    md:top-auto
    md:left-6
    md:right-auto

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-10
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:-top-20
      motion-safe:opacity-0
      motion-safe:scale-110
    `}
  `),
  hint: `
    hidden
    absolute bottom-[20svh] left-1/4 z-10
    animate-pulse
    stroke-1

    md:block
  `,
  items: `
    flex flex-col gap-6
    py-4 px-6

    md:flex-row
    md:py-24
    md:px-8
    md:gap-[14svw]
  `,
  item: (index: number, inView: boolean) => tw(`
    relative

    ${ITEM[index % 6]}

    md:flex
    md:shrink-0

    motion-safe:duration-700

    ${inView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      ${ANIMATABLE[index % 6]}
      motion-safe:opacity-0
    `}
  `),
  buffer: `
    hidden
    w-14 h-full shrink-0

    md:block
  `,
  figure: (index: number) => tw(`
    relative

    ${FIGURE[index % 6]}
  `),
  image: (index: number) => tw(`
    sepia-10
    grayscale-20
    opacity-80 dark:opacity-80
    rounded-xl

    motion-safe:duration-700
    motion-safe:hover:scale-102

    ${IMAGE[index % 6]}
  `),
  caption: (index: number) => tw(`
    absolute
    h-14

    ${CAPTION[index % 6]}
  `),
  heading: `
    flex flex-col gap-0
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
    mb-0.5
    font-black
    text-xs
  `,
  country: `
    text-xtiny
  `,
  elevation: `
    pt-1.25
    text-tiny
    font-mono
  `,
});
