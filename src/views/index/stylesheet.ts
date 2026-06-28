import tw from '@/styles';

export const styles = tw({
  main: `
    relative
    flex flex-col justify-between gap-6
    w-full h-svh
    overflow-x-clip
    p-6

    leading-[0.8]
    uppercase
    text-[min(9vw,42px)]

    md:grid
    md:grid-cols-2
    md:grid-rows-2
    md:text-[min(5.5vw,56px)]
    lg:text-[min(5.5vw,72px)]
    2xl:text-[min(10vw,96px)]
  `,
  title: (isInView: boolean) => tw(`
    relative
    col-span-1 row-span-1 order-0
    flex flex-col items-end

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-100
    ` : `
      motion-safe:translate-x-full
      motion-safe:opacity-0
    `}

    md:order-1
  `),
  travelling: (isInView: boolean) => tw(`
    col-span-1 row-span-1 order-1
    flex flex-col items-start justify-end

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-150
    ` : `
      motion-safe:-translate-x-full
      motion-safe:opacity-0
    `}

    md:order-0
  `),
  living: (isInView: boolean) => tw(`
    col-span-1 row-span-1 order-2
    relative
    flex flex-col items-end justify-start

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-200
    ` : `
      motion-safe:translate-x-full
      motion-safe:opacity-0
    `}

    md:order-3
  `),
  working: (isInView: boolean) => tw(`
    col-span-1 row-span-1 order-3
    relative
    flex flex-col items-start justify-end

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-250
    ` : `
      motion-safe:-translate-x-full
      motion-safe:opacity-0
    `}

    md:order-2
  `),
  heavy: `
    font-black
  `,
  thin: `
    font-thin
  `,
  serif: `
    font-serif
    italic
  `,
  line: `
    relative
  `,
  animatable: `
    relative
  `,
  link: `
    relative z-2
    inline-flex items-center gap-2

    motion-safe:duration-500
    motion-safe:hover:gap-4
  `,
  view: `
    relative top-0.25
    text-xs
    tracking-widest
  `,
  instagram: (isInView: boolean) => tw(`
    absolute top-[24svw] -right-22 z-100
    p-4
    uppercase
    text-xtiny
    font-mono font-extralight
    tracking-widest
    rotate-90 origin-bottom-left

    motion-safe:duration-500
    motion-safe:hover:text-current/50

    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-700
    ` : `
      motion-safe:translate-x-full
      motion-safe:opacity-0
    `}

    lg:top-[24svh]
  `),
  email: (isInView: boolean) => tw(`
    absolute top-[50svh] -left-13.5 z-100
    p-4
    uppercase
    text-xtiny light:text-(--background) md:light:text-(--foreground)
    font-mono font-extralight
    tracking-widest
    -rotate-90 origin-bottom-right

    motion-safe:duration-500
    motion-safe:hover:text-current/50

    ${isInView ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      motion-safe:delay-700
    ` : `
      motion-safe:-translate-x-full
      motion-safe:opacity-0
    `}
  `),
  figure: (isInView: boolean) => tw(`
    absolute bottom-[14svh] -z-1
    aspect-square
    w-100
    -ml-26

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:scale-100
      motion-safe:opacity-100
    ` : `
      motion-safe:scale-40
      motion-safe:opacity-0
    `}

    md:bottom-auto
    md:top-1/2
    md:left-1/2
    md:-translate-x-1/2
    md:-translate-y-1/2
    md:w-[52vw]
    md:ml-0
    lg:w-[44vw]
  `),
  image: `
    grayscale
    rounded-xl
    opacity-80 dark:opacity-40
  `,
  cross: `
    absolute left-1/2 top-1/2 z-1
    -translate-x-1/2 -translate-y-1/2
    w-2/3 h-2/3

    before:absolute
    before:left-1/2
    before:top-1/2
    before:-translate-x-1/2
    before:-translate-y-1/2
    before:w-px
    before:h-6
    before:bg-(--background)/20 dark:before:bg-(--foreground)/20

    after:absolute
    after:left-1/2
    after:top-1/2
    after:-translate-x-1/2
    after:-translate-y-1/2
    after:w-6
    after:h-px
    after:bg-(--background)/20 dark:after:bg-(--foreground)/20
  `,
});
