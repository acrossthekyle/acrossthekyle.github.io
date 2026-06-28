import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    flex flex-col justify-between gap-8
    h-auto w-full
    pt-6 pb-2
    overflow-clip

    lg:h-svh
    sm:pb-4
  `,
  header: (isInView: boolean) => tw(`
    relative
    leading-[0.8]
    uppercase
    font-black
    text-center text-[min(10vw,6rem)]
    font-serif italic
    tracking-widest

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      scale-100
    ` : `
      motion-safe:-top-20
      motion-safe:opacity-0
      scale-110
    `}
  `),
  figure: `
    hidden
    absolute top-1/2 left-1/2 -z-1
    -translate-x-1/2 -translate-y-1/2
    aspect-square
    w-[44svw]

    md:block
  `,
  image: `
    grayscale-20
    opacity-80
    sepia-10
  `,
  items: (isInView: boolean) => tw(`
    group/items
    relative
    flex flex-col items-center gap-2
    w-full
    p-6 pb-0
    text-center

    md:block

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      scale-100
    ` : `
      motion-safe:top-20
      motion-safe:opacity-0
      scale-110
    `}
  `),
  item: `
    inline-block
  `,
  link: `
    relative
    flex items-start gap-2
    px-4 mb-4
    leading-[1]
    font-bold
    text-[min(6.5vw,3rem)]
    tracking-tighter
    uppercase

    data-[filtered=yes]:text-current/100
    data-[dimmed=false]:text-current/100
    data-[dimmed=true]:text-current/15
    data-[filtered=no]:text-current/15
    data-[filtered=no]:pointer-events-none

    hover:!text-current/100

    md:pb-2
    md:mb-0
    lg:text-[min(4vw,3rem)]
  `,
  serif: `
    font-serif font-normal
  `,
  index: `
    block
    absolute -top-1 -right-4
    pt-1
    text-xs
    font-sans font-light
    italic
    tracking-tight

    md:relative
    md:top-auto
    md:right-auto
  `,
  filters: (isInView: boolean) => tw(`
    group/filters
    flex flex-row items-center justify-center gap-2

    md:gap-4

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      scale-100
    ` : `
      motion-safe:top-50
      motion-safe:opacity-0
      scale-110
    `}
  `),
  filter: `
    font-mono font-light
    text-xtiny
    uppercase
    tracking-widest

    motion-safe:group-hover/filters:text-current/50
    motion-safe:hover:text-current/100

    data-[active=yes]:font-black
    data-[active=yes]:!text-current/100

    motion-safe:hover:font-black
  `,
});
