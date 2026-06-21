import tw from '@/styles';

const ASPECTS = [
  'aspect-12/16',
  'aspect-9/16',
  'aspect-square',
  'aspect-square',
  'aspect-video',
  'aspect-4/3',
];

const GRIDS = [
  'flex flex-row sm:mt-[13svh] sm:grid sm:grid-cols-1 sm:grid-rows-2 !aspect-9/16 md:mt-0',
  'flex flex-col sm:mt-[30svh] sm:flex-row-reverse md:mt-0 md:flex-col-reverse',
  'h-full flex flex-col justify-between md:h-auto',
];

const FIGURES = [
  'h-full flex flex-col',
  'h-full flex flex-col md:flex-col-reverse',
];

export const styles = tw({
  container: `
    overflow-hidden

    md:h-svh
  `,
  back: `
    fixed top-0 left-0 z-10
    p-4

    sm:top-1
    sm:left-1
  `,
  arrow: `
    stroke-1
  `,
  header: `
    relative
    flex flex-col items-start gap-4
    px-4
    pt-16

    sm:pt-0
    sm:static
  `,
  title: `
    flex flex-col
    text-[min(20.5vw,104px)] text-current/90
    font-black
    leading-[0.8]
    uppercase
    origin-left scale-x-[0.4]
    whitespace-nowrap

    sm:text-right
    sm:origin-right
    sm:absolute
    sm:top-[7svh]
    sm:right-5
    sm:text-[min(11.9vw,104px)]
    md:bottom-4
    md:top-auto
    md:right-6
    md:text-[3rem]
    md:flex-col
    md:gap-0
    md:leading-[0.8]
  `,
  location: `
    flex flex-col justify-end gap-1
    h-13
    leading-[1]
    text-[0.625rem] text-left
    uppercase
    tracking-widest

    sm:absolute
    sm:top-12
    sm:left-6
    md:bottom-6
    md:top-auto
  `,
  region: `
    inline-block
    w-32
    font-serif font-bold
    italic
  `,
  coordinates: `
    absolute top-4.5 right-4
    font-mono
    text-xtiny text-current/90
    uppercase
    tracking-widest
    italic

    sm:top-6.5
    sm:left-16
    sm:right-auto
  `,
  timeline: `
    absolute top-14 right-4
    flex items-center gap-4
    w-full
    leading-[0.85]
    text-[0.75rem] text-current/90
    font-serif font-bold
    tracking-tighter
    italic
    -rotate-90
    origin-bottom-right

    sm:rotate-0
    sm:top-7
    sm:right-6
    sm:w-auto
  `,
  span: `
    block
    h-px w-full
    bg-(--foreground)/50

    sm:w-[22svw]
  `,









  carousel: `
    flex items-start
    w-svw
    overflow-x-hidden
    overflow-y-auto

    md:h-svh
    md:overflow-x-auto
    md:overflow-y-hidden
    md:no-scrollbar
    md:mb-[9.5svh]
    md:mt-[6svh]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-left-slightly-delayed
  `,
  items: `
    flex flex-col gap-4
    p-4

    sm:grid
    sm:grid-cols-2
    md:flex
    md:flex-row
    md:h-[81svh]
    md:pb-8
    md:p-6
    md:gap-6
  `,
  item: (isInView: boolean, index: number) => tw(`
    relative
    flex-shrink-0

    ${ASPECTS[index % ASPECTS.length]}

    ${index === 0 ? GRIDS[0] : ''}
    ${index === 1 ? GRIDS[1] : ''}
    ${index === 2 ? GRIDS[2] : ''}

    motion-safe:duration-700
    ${isInView ? 'md:motion-safe:scale-100' : 'md:motion-safe:scale-95'}
  `),
  figure: (index: number) => tw(`
    row-span-full
    w-full

    ${index === 0 ? `h-full flex flex-col` : ''}
    ${index === 1 ? `h-full flex flex-col-reverse` : ''}
    ${index === 2 ? `h-full sm:h-1/2 md:h-3/4 flex flex-col` : ''}
    ${index > 2 ? FIGURES[index % FIGURES.length] : ''}
  `),
  caption: `
    flex items-center justify-between
    my-1.25
    leading-[0.85]
    uppercase
    font-medium
  `,
  when: `
    col-span-1
    text-xtiny
    tracking-widest
    font-mono font-bold
    whitespace-nowrap
  `,
  label: `
    col-span-3
    font-serif font-bold italic
    text-xs text-center
    origin-center scale-x-[0.9]
    tracking-widest
    whitespace-nowrap
  `,
  index: `
    col-span-1
    text-xtiny text-right
    font-mono font-bold
    tracking-wider
    whitespace-nowrap
  `,
  maximize: `
    w-full h-full
    overflow-hidden
  `,
  image: (isInView: boolean) => tw(`
    sepia-10
    brightness-90

    ${isInView ? 'grayscale-20' : 'grayscale'}

    motion-safe:duration-700

    md:grayscale
    md:motion-safe:hover:grayscale-20
    md:motion-safe:hover:scale-101
  `),









  total: `
    row-span-1
    flex items-end justify-end
    pb-8
    text-[min(18vw,6rem)] text-current/90
    font-bold font-serif italic
    leading-[0.75]
    origin-right scale-x-[0.65]
    tracking-wider

    sm:origin-center
    sm:justify-center
    sm:text-[14.5rem]
    sm:h-[24svh]
    md:h-[30svh]
  `,








  notes: (index: number) => tw(`
    flex justify-end
    w-full

    ${index === 0 ? `
      items-end
      mt-4
      pl-[24svw]
      text-right

      sm:pl-18
      sm:pr-4
      sm:mt-0
      sm:h-full
      sm:absolute
      sm:right-full
      md:relative
      md:right-auto
      md:pr-0
      md:pl-14
      md:bottom-auto
      md:items-start
      md:h-[28svh]
    ` : ''}
    ${index === 1 ? `
      items-end
      pr-[18svw]
      text-left
      mt-4

      sm:mt-0
      sm:pr-0
      md:mb-0
      md:pl-30
      md:text-right
    ` : ''}
  `),
  paragraph: `
    w-full
    text-[0.575rem]
    font-normal
    leading-[1.75]
    uppercase
    tracking-wider
  `,
});
